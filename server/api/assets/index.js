'use strict';

import {Router} from 'express';
import * as controller from './assets.controller.js';
import * as auth from '../../auth/auth.service';

var router = new Router();


router.get('/list/:id',controller.listAssetsByEmpId);
router.get('/list',controller.listAssets);
router.post('/add',controller.addAssets);
router.post('/edit/:id',controller.editAssets);
router.get('/delete/:id',controller.deleteAssets);
//router.get('/', auth.hasRole('admin'), controller.index);
//router.delete('/:id', auth.hasRole('admin'), controller.destroy);
//router.get('/me', auth.isAuthenticated(), controller.me);
//router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
//router.get('/:id', auth.isAuthenticated(), controller.show);
//router.post('/', controller.create);

module.exports = router;