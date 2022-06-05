import Oder from "../../domain/entity/order";
import OderModel from "../db/sequelize/model/order.model";
import OrderItemModel from "../db/sequelize/model/order-item.model";

export default class OrderRepository {
    async create(entity: Oder): Promise<void> {
        await OderModel.create({
            id: entity.id,
            customer_id: entity.customerId,
            total: entity.total(),
            items: entity.items.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                product_id: item.productId,
                quantity: item.quantity,
            }))
        }, {
            include: [{ model: OrderItemModel }]
        });
    }
}
