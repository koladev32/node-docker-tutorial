import { Router } from "express";
import {getMenus, addMenu, updateMenu} from "../controllers/menus";

const menuRoutes: Router = Router();

menuRoutes.get('/menu', getMenus);
menuRoutes.post('/menu', addMenu);
menuRoutes.put("/menu/:id", updateMenu)


export default menuRoutes;
