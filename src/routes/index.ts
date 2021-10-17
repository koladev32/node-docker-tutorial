import { Router } from "express";
import {getMenus, addMenu, updateMenu, deleteMenu, retrieveMenu} from "../controllers/menus";

const menuRoutes: Router = Router();

menuRoutes.get('/menu', getMenus);
menuRoutes.post('/menu', addMenu);
menuRoutes.put("/menu/:id", updateMenu)
menuRoutes.delete("/menu/:id", deleteMenu);
menuRoutes.get("/menu/:id", retrieveMenu);

export default menuRoutes;
