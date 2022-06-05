import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            const order = new Order("", "123", []);
        }).toThrowError("Id is required");
    });

    it("should throw error when customerId is empty", () => {
        expect(() => {
            const order = new Order("1", "", []);
        }).toThrowError("CustomerId is required");
    });

    it("should throw error when customerId is empty", () => {
        expect(() => {
            const order = new Order("1", "123", []);
        }).toThrowError("Items are required");
    });

    it("should calculate total", () => {
        // Arrange
        const item1 = new OrderItem("1", "Item 1", 50, "p1", 2);
        const item2 = new OrderItem("2", "Item 2", 50, "p2", 2);
        const order = new Order("1", "123", [item1, item2]);

        // Act
        const total = order.total();

        // Assert
        expect(total).toBe(200);
    });

    it("should throw error if the item qtd is less or equal zero", () => {
        expect(() => {
            const item1 = new OrderItem("1", "Item 1", 50, "p1", 0);
            const order = new Order("1", "123", [item1]);
        }).toThrowError("Quantity must be greater than 0");
    });

});