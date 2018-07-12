import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get(`https://practiceapi.devmountain.com/products`).then(response => {
      this.setState({
        products: response.data
      });
    });
  }

  render() {
    let productsToDisplay = this.state.products.map((product, id) => {
      return (
        <Link key={id} to={`/details/${product.id}`}>
          <img   width="200" src={product.image} />
        </Link>
      );
    });

    return (
      <div>
        <h1>Profsf</h1>
        {productsToDisplay}
      </div>
    );
  }
}
