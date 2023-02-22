import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { LoginController } from "./controllers/LoginController";
import { authMiddleware } from "./middlewares/authMiddleware";

const userController = new UserController();
const loginController = new LoginController();
const routes = Router();

routes.post("/admin/login", loginController.login);

routes.use(authMiddleware);
routes.post("/admin/users", userController.create);
routes.get("/admin/users", userController.getAll);
routes.delete("/admin/users/:id", userController.delete);

export default routes;
