import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 64999,
                    title: 'TV',
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                    price: 12999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id:2
                },
                {
                    price: 54099,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id:3
                }
                
            ]
        }
    }
    handelIncreaseQuantity = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products
        })
    }
    handelDecreaseQuantity = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty-=1;
        this.setState({
            products
        })
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                    return(
                    <CartItem
                    product = {product}
                    key = {product.id}
                    onIncreaseQuantity={this.handelIncreaseQuantity}
                    onDecreaseQuantity={this.handelDecreaseQuantity}
                    />
                    )
                })}
            </div>

        );
    }
}

export default Cart;