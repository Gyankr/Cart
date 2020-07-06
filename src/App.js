import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 64999,
          title: 'TV',
          qty: 0,
          img: 'http://3.bp.blogspot.com/-A_c-e1o_iks/T5YmUTGikxI/AAAAAAAAB58/bUgyaa6XQls/s640/tv.jpg',
          id: 1
        },
        {
          price: 12999,
          title: 'Mobile Phone',
          qty: 0,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6E73YoleOXNCryjuNTA8Wq7IDJ__u-InmUg&usqp=CAU',
          id: 2
        },
        {
          price: 54099,
          title: 'Laptop',
          qty: 0,
          img: 'https://previews.123rf.com/images/larryrains/larryrains1901/larryrains190100046/118556728-laptop-computer-a-vector-cartoon-illustration-of-a-laptop-computer-.jpg',
          id: 3
        },
        {
          price: 8999,
          title: 'Ipod',
          qty: 0,
          img: 'https://clipartstation.com/wp-content/uploads/2017/11/mp3-player-clipart-6.jpg',
          id: 4
        }

      ]
    }
  }
  handelIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products
    })
  }
  handelDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products
    })
  }
  handelDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    })
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
      return '';
    })

    return cartTotal;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handelIncreaseQuantity}
          onDecreaseQuantity={this.handelDecreaseQuantity}
          onDeleteProduct={this.handelDeleteProduct}
        />
        <div style={ {padding: 15, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
