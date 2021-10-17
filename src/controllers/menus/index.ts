import { Response, Request} from "express";
import {IMenu} from "../../types/menu";
import Menu from "../../models/menu"

const getMenus = async (req: Request, res: Response): Promise<void> => {
    try {
        const menus: IMenu[] = await Menu.find();
        res.status(200).json({ menus });
    } catch (error) {
        throw error;
    }
}

export {getMenus};
