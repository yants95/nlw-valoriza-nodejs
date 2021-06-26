import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

import { 
  CreateUserController, CreateTagController, AuthenticateUserController, CreateComplimentController,
  ListUserSendComplimentsController, ListUserReceiveComplimentsController, ListTagsController, ListUsersController
} from './controllers';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();

const listTagsController = new ListTagsController();

const listUsersController = new ListUsersController();

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);
router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);

router.get("/users", ensureAuthenticated, listUsersController.handle);

export { router };
