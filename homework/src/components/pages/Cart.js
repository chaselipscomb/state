import React, { useState } from 'react';
import API from "../utils/API";
import { Button, Card } from 'react-bootstrap';

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
  const [itemState, setItemState] = useState({
    image: 10000,
    name: "Chase",
    saleprice: "excited",
    link: "Alec",
    reviews: "5 stars"
  });

  API.loadCart(itemsincart)
    .then(itemsincart => {

      // setItemState({
      //   name: itemsincart.name,
      //   image: itemsincart.image,
      //   saleprice: itemsincart.salePrice,
      //   link: itemsincart.link,
      //   reviews: itemsincart.reviews
      // })
    })
  return (
    <React.Fragment>
      <center><h1>Cart Page</h1></center>

      {itemsincart.map(item => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.saleprice}</Card.Text>
            <Button variant="primary" href={item.link}>Item Link</Button>
          </Card.Body>
        </Card>
      ))}
    </React.Fragment>
  );
}

export default Cart;
