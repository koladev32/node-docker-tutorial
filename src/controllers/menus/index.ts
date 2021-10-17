import { Response, Request } from "express";
import { IMenu } from "../../types/menu";
import Menu from "../../models/menu";

const getMenus = async (req: Request, res: Response): Promise<void> => {
  try {
    const menus: IMenu[] = await Menu.find();
    res.status(200).json({ menus });
  } catch (error) {
    throw error;
  }
};

const retrieveMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const menu: IMenu | null = await Menu.findById({ _id: id });

    res.status(menu ? 200 : 404).json({ menu });
  } catch (error) {
    throw error;
  }
};

const addMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IMenu, "name" | "description" | "price">;
    const menu: IMenu = new Menu({
      name: body.name,
      description: body.description,
      price: body.price,
    });

    const newMenu: IMenu = await menu.save();

    res.status(201).json(newMenu);
  } catch (error) {
    throw error;
  }
};

const updateMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updateMenu: IMenu | null = await Menu.findByIdAndUpdate(
      { _id: id },
      body
    );

    res.status(updateMenu ? 200 : 404).json({
      menu: updateMenu,
    });
  } catch (error) {
    throw error;
  }
};

const deleteMenu = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedMenu: IMenu | null = await Menu.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      todo: deletedMenu,
    });
  } catch (error) {
    throw error;
  }
};
export { getMenus, addMenu, updateMenu, deleteMenu, retrieveMenu };
