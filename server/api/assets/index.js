'use strict';

import {Router} from 'express';
import * as controller from './assets.controller.js';
import * as auth from '../../auth/auth.service';

var router = new Router();


router.get('/list/:id',controller.listAssetsByEmpId);
router.get('/listall',controller.listAssets);
router.post('/add/asset',controller.addAssets);
router.post('/assign/asset',controller.assignAsset);
router.post('/get',controller.getAssetById);
router.post('/save',controller.saveAssetById);
router.post('/return',controller.returnAsset);
router.get('/fetch/:id',controller.availableAsset);


//router.get('/', auth.hasRole('admin'), controller.index);
//router.delete('/:id', auth.hasRole('admin'), controller.destroy);
//router.get('/me', auth.isAuthenticated(), controller.me);
//router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
//router.get('/:id', auth.isAuthenticated(), controller.show);
//router.post('/', controller.create);

module.exports = router;
