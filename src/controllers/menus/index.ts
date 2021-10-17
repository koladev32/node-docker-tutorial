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

const addMenu = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IMenu, "name" | "description" | "price">;
        const menu: IMenu = new Menu({
            name: body.name,
            description: body.description,
            price: body.price
        })

        const newMenu : IMenu = await menu.save();

        res
            .status(201)
            .json(menu)
    } catch (error){
        throw error;
    }
}

export {getMenus, addMenu};
