import React, { useState } from 'react';
import './Shop.css';
import fakedata from '../../fakeData';
import Productss from '../Productss/Productss';
import Cart from '../Cart/Cart';

const Shop = () => {
const [products,setproducts]= useState(fakedata);   
 const [cart, setcart] = useState([]);
 
const handleAddProduct = (product)=> {
  
  console.log(product);
  
    const newcart = [...cart,product];
    setcart(newcart);
    
   

}

    return (
        <div className="shop" >


            
            <div className="shoppart" >
                
                

                  {
                    products.map(product=> <Productss handleAddProduct={handleAddProduct} Productss ={product}></Productss>)

                  }
                
              

            </div>




 
         <div className="cartpart">
           

           <h1  >  Cart</h1>
            
            <Cart cart={cart} ></Cart>


         </div>








          












        </div>

        
    );
};

export default Shop;