
export const getCartGuest = ()=>{
    // Traerse todos los productos del localStorage
    let cart = JSON.parse(localStorage.getItem("cart"));
    let totalGet = 0;
    if(cart) {
        cart.products.map(p =>{
            totalGet= p.orderLine.subTotal + totalGet
        })
        cart.total= totalGet;
        return cart;
    }
    else return {};
};
export const deleteCartGuest = (productID)=>{
    //Eliminar del carrito un producto
    let cart = localStorage.getItem("cart");
    let data;
    cart = JSON.parse(cart)
    let product =  cart.products.filter(p => p.id !== productID);
    cart.products= product;
    data = JSON.stringify(cart);
    localStorage.setItem("cart", data);
    return "Se ha eliminado el producto"
};

export const putCartGuest = (productID, quant)=>{
    // Modificar el quantity
   if(quant !== 0 ){
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart)
    let data;
    let product = cart.products.map(p => {
        if(p.id == productID){
            p.orderLine.quantity= quant
            p.orderLine.subTotal= p.price * p.orderLine.quantity;
        }else{
            p.orderLine.quantity= p.orderLine.quantity
        }
        return p
    });
    cart.products= product;
    data = JSON.stringify(cart);
    localStorage.setItem("cart", data);
   }
};


export const postCartGuest= (product)=>{
    // Ingresar los productos
    let cart = localStorage.getItem("cart");
    let data;    
    product.orderLine = {};
    product.orderLine.quantity= 1;
    product.orderLine.subTotal= product.price * product.orderLine.quantity;
    if( !cart){
         cart = {
            user: "Guest User",
            products: [],
            total:0
        };
        cart.products.push(product);
        data = JSON.stringify(cart)
    }else{
        cart = JSON.parse(cart);
        let repeat = false 
        for (let index = 0; index < cart.products.length; index++) {
            const element = cart.products[index];
            if(element.id === product.id){
                 repeat = true;
                 
            }           
        }
        if(!repeat){
            cart.products.push(product);
            
        } 
       
        data = JSON.stringify(cart)
    }
    localStorage.setItem("cart", data)
};
