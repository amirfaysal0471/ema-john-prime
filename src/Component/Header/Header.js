import React from 'react';
import './Header.css';
import img from '../../images/logo.png';
const Header = () => {
    return (
        

            <div className="header" >

              <img src={img} alt=""/>
              <nav><a href="/shop">shop</a><a href="/review">Order Review</a><a href="/manage">manage Inventory</a></nav>

            </div>
          
       
      


            
        
    );
};

export default Header;