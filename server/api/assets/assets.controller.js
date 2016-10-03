'use strict';

import Assets from './assets.model.js';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';
var ObjectId = require('mongoose').Types.ObjectId;

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

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Get list of assets by employee Id
 * restriction: 'admin'
 */
export function listAssetsByEmpId(req, res, next) {
    var param = req.params.id;
    var isNumber = isNumeric(param);
    if(isNumber === true) {
        console.log("here")
        var query = {"empId":param};
    }
    else {
        var query = { "empName" : { $regex : new RegExp(param, "i") } }
    }
    return Assets.find(query).exec()//({"username" : {$regex : ".*son.*"}});
        .then(user => {
            if (!user) {
                return res.status(404).end();
            }
            res.json(user);
        })
        .catch(err => next(err));
}

/**
 * Get list of Assets
 * restriction: 'admin'
 */
export function listAssets(req, res, next) {

    return Assets.find({}).exec()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(handleError(res));
}

/**
 * Get add of Assets
 * restriction: 'admin'
 */
export function addAssets(req, res, next) {

    var newAssets = new Assets(req.body);
    Assets.findOne({assetCode:req.body.assetCode}).exec().then(function(asset){
        if(asset){
            res.status(401).send({"message": "Asset already exist."});
        } else {
            return newAssets.save()
                .then(function (user) {
                    var token = jwt.sign({_id: user._id}, config.secrets.session, {
                        expiresIn: 60 * 60 * 5
                    });
                    res.status(200).send({"status": "success"});
                })
                .catch(validationError(res));
        }
    })

        .catch(validationError(res));
}


/**
 * verify user asset
 * restriction: 'admin'
 */
export function verifyUserAsset(req, res) {
    return Assets.find({empId:req.body.empId, assetType:req.body.assetType, isAvailable:false, dateOfReturn:null}).exec()
        .then(users => {

            if(users.length > 0){
               res.status(203).send({status: 'Cannot assign asset, user already have an asset.'});
            }
            else{
                res.status(200).send({status:'success'});
            }
        })
        .catch(handleError(res));
}

/**
 * Get edit of Assets
 * restriction: 'admin'
 */
export function getAssetById(req, res, next) {

    return Assets.findOne({_id: new ObjectId(req.body._id)}).exec()//({"username" : {$regex : ".*son.*"}});
        .then(user => {
            if (!user) {
                return res.status(404).end();
            }
            res.json(user);
        })
        .catch(err => next(err));
}

/**
 * Get edit of Assets
 * restriction: 'admin'
 */
export function saveAssetById(req, res, next) {

    return Assets.findOneAndUpdate({_id: new ObjectId(req.body._id)},req.body).exec()//({"username" : {$regex : ".*son.*"}});
        .then(user => {
            if (!user) {
                return res.status(404).end();
            }
            res.json({'status':'success'});
        })
        .catch(err => next(err));
}

/**
 * Get delete of Assets
 * restriction: 'admin'
 */
export function deleteAssets(req, res, next) {
    return Assets.findByIdAndRemove(req.params.id).exec()
        .then(function() {
            res.status(204).end();
        })
        .catch(handleError(res));
}

/**
 * Get delete of Assets
 * restriction: 'admin'
 */
export function returnAsset(req, res, next) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    today = mm+'/'+dd+'/'+yyyy;

    return Assets.findOneAndUpdate({_id: new ObjectId(req.body._id)},{'isAvailable':true,'dateOfReturn': today }).exec()
        .then(function() {
            res.status(200).send({"status":"success"});
        })
        .catch(handleError(res));
}



/**
 * Get delete of Assets
 * restriction: 'admin'
 */
export function availableAsset(req, res, next) {
    var temp= [];
    return Assets.find({assetType:req.params.id, isAvailable:true}).exec()
        .then(assets => {
            if (!assets) {
                return res.status(404).end();
            }
            for(var i = 0; i< assets.length;i++ ){
                temp.push({assetCode:assets[i].assetCode, _id:assets[i]._id});
            }
            res.json({availableStock:assets.length, assetList:temp});
        })
}

/**
 * Get assign Assets
 * restriction: 'admin'
 */
export function assignAsset(req, res, next) {
    var temp= [];
    var objId = req.body._id;
    return Assets.findOneAndUpdate({_id: new ObjectId(req.body._id)},{isAvailable:false}).exec()
        .then(assets => {
            if (!assets) {
                return res.status(404).end();
            }
            else{
                var newAssets = new Assets(req.body.assetData);
                //newAssets.provider = 'local';
                //newAssets.role = 'user';
                newAssets.save()
                    .then(function(user) {
                        var token = jwt.sign({ _id: user._id }, config.secrets.session, {
                            expiresIn: 60 * 60 * 5
                        });
                        //res.json({ token });
                        res.status(200).send({"status":"success"});
                    })
                    .catch(validationError(res));
            }
          //  res.status(200).send({"status":"success"});
        })
}
//
///**
// * Get list of users
// * restriction: 'admin'
// */
//export function index(req, res) {
//    return Assets.find({}, '-salt -password').exec()
//        .then(users => {
//            res.status(200).json(users);
//        })
//        .catch(handleError(res));
//}

///**
// * Creates a new user
// */
//export function create(req, res, next) {
//    var newAssets = new Assets(req.body);
//    newAssets.provider = 'local';
//    newAssets.role = 'user';
//    newAssets.save()
//        .then(function(user) {
//            var token = jwt.sign({ _id: user._id }, config.secrets.session, {
//                expiresIn: 60 * 60 * 5
//            });
//            res.json({ token });
//        })
//        .catch(validationError(res));
//}
//
///**
// * Get a single user
// */
//export function show(req, res, next) {
//    var userId = req.params.id;
//
//    return Assets.findById(userId).exec()
//        .then(user => {
//            if (!user) {
//                return res.status(404).end();
//            }
//            res.json(user.profile);
//        })
//        .catch(err => next(err));
//}
//
///**
// * Deletes a user
// * restriction: 'admin'
// */
//export function destroy(req, res) {
//    return Assets.findByIdAndRemove(req.params.id).exec()
//        .then(function() {
//            res.status(204).end();
//        })
//        .catch(handleError(res));
//}

/**
 * Change a users password
 */
export function changePassword(req, res, next) {
    var userId = req.user._id;
    var oldPass = String(req.body.oldPassword);
    var newPass = String(req.body.newPassword);

    return Assets.findById(userId).exec()
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

    return Assets.findOne({ _id: userId }, '-salt -password').exec()
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
