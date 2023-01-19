import {Router} from "express";
import ProductController from "../../controllers/user/product.controller";
const productController = new ProductController();
const UserRouter = Router();

UserRouter.get('/', productController.showList);
UserRouter.get('/productDetail/:id', productController.showProductDetail);

export default UserRouter;

