class Order {
    constructor(
        public id: string,
        public address: string,
        public number: number,
        public optionalAdress: string,
        public paymentOption: string,
        public orderItens: OrderItem[] = []
    ) { }
}

class OrderItem {
    constructor(public quantity: number, public menuID: string) { }
}

export { Order, OrderItem }
