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


/**
 * Get list of assets by employee Id
 * restriction: 'admin'
 */
export function listAssetsByEmpId(req, res, next) {
    var empId = req.params.id;
    return Assets.find({"empId":empId}).exec()//({"username" : {$regex : ".*son.*"}});
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
    //newAssets.provider = 'local';
    //newAssets.role = 'user';
    newAssets.save()
        .then(function(user) {
            var token = jwt.sign({ _id: user._id }, config.secrets.session, {
                expiresIn: 60 * 60 * 5
            });
            res.json({ token });
            //res.json({ 'status': 'success'});
        })
        .catch(validationError(res));
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
