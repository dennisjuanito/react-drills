import React, { Component } from 'react';
import axios from "axios";

 export default class Details extends Component {
     constructor(props) {
        super(props);
         console.log(props);
         this.state = {
            productDetails : {}
         }
       
     }

     componentDidMount() {
         axios.get(`https://practiceapi.devmountain.com/products/${this.props.match.params.id}`).then((response) => {
             this.setState({
                productDetails: response.data

             });
             console.log(response);
         });
     }
    render() {
        let {image, title, price } = this.state.productDetails;
        return(
            <div> 
                <img width="200" src={image} alt=""/>
                <h1>{title}</h1>
                <h3>{price}</h3>


            </div>
        );
    }
}