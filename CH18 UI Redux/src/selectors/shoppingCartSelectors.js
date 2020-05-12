function toCartView({shoppingCart}) {
    const list = shoppingCart.valueSeq();
    return Object.freeze({
        list,
        total: list.reduce(addPrice, 0)
    });
}

function addPrice(totalPrice, line) {
    return totalPrice + line.price * line.quantity;
}

export default { toCartView };