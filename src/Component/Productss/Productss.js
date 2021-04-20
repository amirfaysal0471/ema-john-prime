import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Productss = (props) => {

    return (
        
      <div className="product">

        <div className="img" > 
            <img src={props.Productss.img} alt=""/>
                 
        </div>
        <div className="name">
                <h1>{props.Productss.name}</h1>
                <h2>by : {props.Productss.seller}</h2>
                <br/>
                 <h2>Price : ${props.Productss.price  }</h2>
                 <br/>
                 
                 <h3>Only {props.Productss.stock} left in stock - order soon</h3>
                 <button onClick={ ()=> props.handleAddProduct (props.Productss) }
                  className="cartbutton"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
        </div>

      </div>
        
            
        
    );
};

export default Productss;