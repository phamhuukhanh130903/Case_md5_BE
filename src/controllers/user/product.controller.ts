import {AppDataSource} from "../../data-source";
import {Product} from "../../entity/Product";
import {Assessment} from "../../entity/Assessment";
const productRepository = AppDataSource.getRepository(Product);
const assessmentRepository = AppDataSource.getRepository(Assessment);

class ProductController {
    async showList(req, res) {
        const products = await productRepository.find({
            relations: {
                categories: true
            }
        });
        res.status(200).json(products)
    }
    async showProductDetail(req, res) {
        let id = req.params.id;
        const product = await productRepository.findOneBy({id: id})
        const categories = await productRepository.createQueryBuilder()
            .relation(Product, "categories")
            .of(id)
            .loadMany()
        const assessment = await assessmentRepository.createQueryBuilder('ase')
            .innerJoin('ase.user', 'user')
            .innerJoin('ase.product', 'product')
            .select('ase.id, ase.comment, product.name')
            .addSelect('user.name', 'user_name')
            .addSelect('product.id', 'product_id')
            .where('product.id = :id', {id: id})
            .getRawMany();
        res.status(200).json({
            product: product,
            categories: categories,
            assessment: assessment
        });
    }

}
export default ProductController;