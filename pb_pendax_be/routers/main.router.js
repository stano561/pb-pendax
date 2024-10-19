import router from "express";
import { test } from "../controllers/main.controller.js";
import { authenticateToken } from "../authentication/authenticate.js";

const mainRouter = router(); // creating object mainRouter of type router that is exported from express
mainRouter.get("/test", authenticateToken, test); // authenticate before sending caling function test from main controller js
export { mainRouter };
