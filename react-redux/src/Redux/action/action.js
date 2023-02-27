export const Cart=(items)=>{
    return{
     type:'ADD_CART',
     payload:items
    }
}
export const Remove=(items)=>{
    return{
     type:'CART_REMOVE',
     payload:items
    }
}