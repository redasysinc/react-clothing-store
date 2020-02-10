export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(i => i.id === itemToAdd.id);
    if (existingItem){
        return cartItems.map(i=>
            i.id===itemToAdd.id
            ? {...i, quantity: i.quantity + 1}
            : i
            );
    }

    return [...cartItems, {...itemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(i => i.id === itemToAdd.id);
    if (existingItem && existingItem.quantity > 1){
        return cartItems.map(i=>
            i.id===itemToAdd.id
            ? {...i, quantity: i.quantity - 1}
            : i
            );
    }
    cartItems.pop(itemToAdd);
    return [...cartItems];
}