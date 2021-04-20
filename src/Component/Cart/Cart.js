import React from 'react';

const cart = (props) => {
    const items = props.cart;
     

     let total=0;
     for(let i=0;i<items.length;i++)
{

  const products =items[i];

  total=total + products.price;


}


let shipping = 0;
if(total>35){
    shipping=0;
}
if(total>15)
{
    shipping=4.9;
}

else if (total>0){
    total=12;
}


    return (
        <div>

            <p>Order Summary : {items.length}</p>
            <p>shipping {shipping  } </p>
            <p>Total price: ${total+shipping} </p>
           
            
        </div>
    );
};

export default cart;