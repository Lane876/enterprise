//argumenti: cartItems > svi postojeci cartItems koji su trenutno u cartImtes areju
//cartItemToAdd > onaj koji zelimo da dodamo
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //provera da li u cartItems odredjeni cartItem postoji
  const existingCartItem = cartItems.find(
    //vraca prvi ajtem u areju na osnovu uslova
    cartItem => cartItem.id === cartItemToAdd.id //<<< ovo je uslov
  );
  //ako postoji
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //ako cartItem u areju ne postoji onda se vraca>>> vec postojeci cartItem koji su tamo plus
  //cartItemToAdd sa osnovnim kvantitetom 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1
        }
      : cartItem
  );
};
