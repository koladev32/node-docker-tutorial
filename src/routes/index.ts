import { Router } from "express";
import {getMenus} from "../controllers/menus";

const menuRoutes: Router = Router();

menuRoutes.get('/menus', getMenus);

export default menuRoutes;
