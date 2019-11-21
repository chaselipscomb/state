import React, { useState } from 'react';
import API from "../utils/API";
import { Button, Card } from 'react-bootstrap';
import { useCartContext } from "../utils/GlobalState";

let  itemsincart= [
  {
    image : "http://img.bbystatic.com/BestBuy_US/images/products/1792/17929789_sa.jpg",
    name: "Chase",
    saleprice: "excited",
    link: "Alec",
    reviews: "5 stars"
  }
]


function Cart() {
  const [state, dispatch] = useCartContext();
  
  console.log(state)

  API.loadCart(itemsincart)
    .then(itemsincart => {
      console.log(itemsincart)

    })
  return (
    <React.Fragment>
      <center><h1>Cart Page</h1></center>

      {state.map(item => (
        <center><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.saleprice}</Card.Text>
            <Button variant="primary" href={item.link}>Item Link</Button>
          </Card.Body>
        </Card></center>
      ))}
    </React.Fragment>
  );
}

export default Cart;
