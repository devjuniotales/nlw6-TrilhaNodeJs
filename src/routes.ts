import {Router} from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import {CreateUserController} from './controllers/CreateUserController'
import {AuthenticateUserController } from './controllers/AuthenticateUserController'
import {ensureAdmin} from './middlewares/ensureAdmin'
import { CreateComplimentController } from './controllers/CreateComplimentController';
import {ensureAuthenticated } from './middlewares/ensureAuthenticate'
import { ListUserSendComplimentsController } from './controllers/ListUserSendController';
import { ListUserReceiveController } from './controllers/ListUserReceiveController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserController } from './controllers/ListUsersController';

const createUserController = new CreateUserController();
const createTagController  = new CreateTagController();
const authenticateController  = new  AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

const router = Router();

router.post('/users',createUserController.create);
router.get('/users',ensureAuthenticated, listUsersController.handle)

router.post('/tags',ensureAuthenticated, ensureAdmin,createTagController.create);
router.get('/tags', ensureAuthenticated, listTagsController.handle)

router.post('/login',authenticateController.authenticate);

router.post('/compliments',ensureAuthenticated, createComplimentController.create)

router.get('/users/compliments/send', ensureAuthenticated,listUserSendComplimentsController.handle);
router.get('/users/compliments/receive', ensureAuthenticated ,listUserReceiveComplimentsController.handle);

export { router}