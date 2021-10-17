import { Router } from "express";
import {getMenus} from "../controllers/menus";

const router: Router = Router();

router.get('/menus', getMenus);

export default router;
