import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            const customer = new Customer("", "Jhon");
        }).toThrowError("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            const customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });

    it("should change name", () => {
        // Arrange
        const customer = new Customer("123", "Jhon");

        // Act
        customer.changeName("Jane");

        // Assert
        expect(customer.name).toBe("Jane");
    });

    it("should activate customer", () => {
        // Arrange
        const customer = new Customer("123", "Jhon");
        const address = new Address("Street 1", 123, "12345-678", "São Paulo");
        customer.changeAddress(address);

        // Act
        customer.activate();

        // Assert
        expect(customer.isActive()).toBe(true);
    });

    it("should throw error when address is undefined when you activate", () => {
        const customer = new Customer("123", "Jhon");

        expect(() => {
            customer.activate();
        }).toThrowError("Address is mndatory to activate a customer");
    });


    it("should deactivate customer", () => {
        // Arrange
        const customer = new Customer("123", "Jhon");

        // Act
        customer.deactivate();

        // Assert
        expect(customer.isActive()).toBe(false);
    });

    it('should add reward points', () => {
        const customer = new Customer("1", "Customer 1");
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    });

});
