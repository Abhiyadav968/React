const insi = {
      cart: []
}
const CartReducer = (state = insi, action) => {
      switch (action.type) {
            case 'ADD_CART':
                  return {
                        ...state,
                        cart: [...state.cart, action.payload]
                  }
            case 'CART_REMOVE':
                  const revome = state.cart.filter(e => e.name !== action.payload)
                  console.log(revome)
                  return {
                        ...state,
                        cart: revome
                  }
            default: return state
      }
}

export default CartReducer