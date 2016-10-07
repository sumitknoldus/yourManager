'use strict';

import User from './user.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';


var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'sumit@knoldus.com',
        pass: 'hrhk@1234'
    }
};
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(smtpConfig);
var newUser = {};
var verifyTokenNo = 0 ;
// setup e-mail data with unicode symbols


function validationError(res, statusCode) {
    statusCode = statusCode || 422;
    return function(err) {
        res.status(statusCode).json(err);
    }
}

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
        res.status(statusCode).send(err);
    };
}

/**
 * Get list of users
 * restriction: 'admin'
 */
export function index(req, res) {
    return User.find({}, '-salt -password').exec()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(handleError(res));
}

/**
 * Get list of EmpWithNoAssets
 * restriction: 'admin'
 */
export function getAllEmps(req, res) {
    return User.find({empId:{$ne: ''} },'empId firstName middleName lastName email').exec()
        .then(users => {
            if(users.length >= 0 ){
                res.status(200).send(users);
            }
            else{
                res.status(204).send({status:'No Record Found'});
            }
        })
        .catch(handleError(res));
}



export function verficationEmail(req, res, next){
    newUser = new User(req.body);
    verifyTokenNo = ""+Math.floor(100000 + Math.random() * 900000);
    var userName = newUser.firstName +" "+ newUser.lastName;
    var mailOptions = {
        from: '"Admin" <sumit@knoldus.com>', // sender address
        to: newUser.email, // list of receivers
        subject: 'Account Verification', // Subject line
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Code Squad</title>
</head>
<body style="font-size:12px; padding:0; font-family:Arial,Helvetica,sans-serif;color:#333;margin:0" text-align="left">
<table class="main" style="max-width: 100%; margin:15px; display: block; padding: 20px; text-align:left; border: #aaa solid 1px;" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <table cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                        <h1 style="color:#26A69A;">YourManager</h1>

                    </td>
                </tr>
                <tr>
                    <td>`
                         + '<h3> Hi ' + userName + ',</h3>' +

                        '<b> Your verification token is: '+verifyTokenNo+'</b>' +
                    `</td>
                </tr>
                <tr>
                    <td>
                        If you have any questions or need assistance, feel free to email us at <a href="mailto:admin@knoldus.freshdesk.com">admin@knoldus.freshdesk.com</a>
                        <br>
                        <br> Regards<br>
                        Admin, <br/>
                        Knoldus Software LLP.
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<table width="100%" align="left" style="padding:0 20px;border:0">
    <tr>
        <td>
            <address style="font-style:normal;">
                <strong><span style="color:#4078C0;">YourManager</span></strong><br/>
                SDF L-11, Noida Special Economic Zone<br/>
                Sector 81<br/>
                Noida, Uttar Pradesh 201305<br/>
                India<br/>
                <abbr title="Phone">P:</abbr> +91 - 1142316525
            </address>
        </td>
        <td>
            Follow YourManager<br>
            <div>
                <a href="https://www.facebook.com/KnoldusSoftware/">
                    <div style="width: 24px; margin-right:2%; font-weight:bold; height: 24px; line-height:23px; background: #00A9E0; color:white; font:bold; -moz-border-radius: 3%; -webkit-border-radius: 3%; border-radius: 80%; float:left;"><center>f</center></div>
                </a>
                <a href="https://twitter.com/Knolspeak/media">
                    <div style="width: 24px; margin-right:2%; font-weight:bold; height: 24px; line-height:23px; background: #00A9E0; color:white; font:bold; -moz-border-radius: 3%; -webkit-border-radius: 3%; border-radius: 80%; float:left;"><center>t</center></div>
                </a>
            </div>
        </td>
    </tr>
    <tr>
    </tr>
</table>
</body>
</html>`
    };

    User.findOne({email:newUser.email}).then(user => {
        if(!user) {
            // send mail with defined transport object
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    res.status(403).send({"status": error});
                    return console.log(error);
                }
                console.log('Message sent: ' + info.response);
                res.status(200).send({"status":"success"});
            });
        }

        else{
            res.status(409).send({'status':'Duplicate record'});
        }
    })
    .catch(validationError(res));

}

/**
 * Creates a new user
 */
export function create(req, res, next) {

    //var newUser = new User(req.body);
    // newUser.provider = 'local';
    //newUser.role = 'user';
    if(req.body.verificationToken === verifyTokenNo){
        newUser.save()
            .then(function(user) {
                var token = jwt.sign({ _id: user._id }, config.secrets.session, {
                    expiresIn: 60 * 60 * 5
                });

                res.status(200).send( {'message':true,'user':user});

            })
            .catch(validationError(res));
    }
    else{
        res.status(403).send({'status':'token mismatch'} );
    }
}

/**
 * Login a user
 */
export function assignEmpId(req, res, next) {

    //loginUser.provider = 'local';
    //loginUser.role = 'user';
    User.findOne({'empId':req.body.empId})
        .then(function(user) {
            if(user){
                res.status(409).send({'message':'Duplicate record.'});
            }else {
                User.findOneAndUpdate({'email':req.body.email},{empId:req.body.empId})
                    .then(function(user) {

                        res.status(200).send({'status':'success'});
                    })
                    .catch(validationError(res));
            }
        })
        .catch(validationError(res));

}


/**
 * Assign empId's to new Joinee
 */
export function signIn(req, res, next) {

    //loginUser.provider = 'local';
    //loginUser.role = 'user';

    User.findOne({'email':req.body.email, 'password':req.body.password})
        .then(function(user) {

            var token = jwt.sign({ _id: user._id }, config.secrets.session, {
                expiresIn: 60 * 60 * 5
            });
            res.json( user );
        })
        .catch(validationError(res));
}

/**
 * Get a single user
 */
export function show(req, res, next) {
    var userId = req.params.id;

    return User.findById(userId).exec()
        .then(user => {
            if (!user) {
                return res.status(404).end();
            }
            res.json(user.profile);
        })
        .catch(err => next(err));
}

/**
 * List the emails and names of all users whose empId is not assigned
 */
export function listEmail(req, res, next) {
    return User.find({empId:""},'email firstName middleName lastName').exec()
        .then(user => {
            if (!user) {
                return res.status(404).end();
            }
            res.json(user);
        })
        .catch(err => next(err));
}

/**
 * Deletes a user
 * restriction: 'admin'
 */
export function destroy(req, res) {
    return User.findByIdAndRemove(req.params.id).exec()
        .then(function() {
            res.status(204).end();
        })
        .catch(handleError(res));
}

/**
 * Change a users password
 */
export function changePassword(req, res, next) {
    var userId = req.user._id;
    var oldPass = String(req.body.oldPassword);
    var newPass = String(req.body.newPassword);

    return User.findById(userId).exec()
        .then(user => {
            if (user.authenticate(oldPass)) {
                user.password = newPass;
                return user.save()
                    .then(() => {
                        res.status(204).end();
                    })
                    .catch(validationError(res));
            } else {
                return res.status(403).end();
            }
        });
}

/**
 * Get my info
 */
export function me(req, res, next) {
    var userId = req.user._id;

    return User.findOne({ _id: userId }, '-salt -password').exec()
        .then(user => { // don't ever give out the password or salt
            if (!user) {
                return res.status(401).end();
            }
            res.json(user);
        })
        .catch(err => next(err));
}

/**
 * Authentication callback
 */
export function authCallback(req, res, next) {
    res.redirect('/');
}
