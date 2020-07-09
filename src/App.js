import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading:true
    }
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;          
    //       return data;
    //     })
    //     this.setState({
    //       products,
    //       loading:false
    //     })
    //   })

    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;          
          return data;
        })
        this.setState({
          products,
          loading:false
        })

      })
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

  addProduct = () => {
    firebase
     .firestore()
     .collection('products')
     .add({
       img : 'https://png.pngtree.com/png-clipart/20190905/original/pngtree-cartoon-one-earphone-illustration-png-image_4516476.jpg',
       price: 1580,
       qty:0,
       title:'Earphone'
     })
     .then((docRef)=>{
      console.log('Product has been added : ', docRef);
     })
     .catch((error)=>{
       console.log('Error : ', error);
     })
  }
  render() {
    const { products,loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding:20, fontSize:20}}>Add a Product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handelIncreaseQuantity}
          onDecreaseQuantity={this.handelDecreaseQuantity}
          onDeleteProduct={this.handelDeleteProduct}
        />
        {loading&& <h1>Loading Products . . .</h1>}
        <div style={{ padding: 15, fontSize: 20 }}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
