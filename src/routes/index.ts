import { Router } from "express";
import {getMenus, addMenu} from "../controllers/menus";

const menuRoutes: Router = Router();

menuRoutes.get('/menu', getMenus);
menuRoutes.post('/menu', addMenu);


export default menuRoutes;
