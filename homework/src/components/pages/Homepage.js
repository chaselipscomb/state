import React, { useRef, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import API from "../utils/API";
import { Button, Card } from 'react-bootstrap';

//const placeholderpicture = MYPICTURE;

const centertext = {
  textAlign: "center"
};
const centercontent = {
  alignContent: "center"
}

const picturewidth = {
  width: "286px"
}

const floated = {
  float: "left"
}

function Home() {

  const [itemState, setItemState] = useState({
    image: 10000,
    name: "Chase",
    saleprice: "excited",
    link: "Alec",
    reviews: "5 stars"
  });

  function loadAll() {
    API.loadItems()
      .then(res => {
        console.log(res)
        setItemState({
          name: res.name,
          image: res.image,
          saleprice: res.salePrice,
          link: res.url,
          reviews: res.customerReviewAverage

        })
      })
      .catch(err => console.log(err));
  }

  useEffect(loadAll, [])

  let texInput = useRef();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    let thingsearched = "";
    thingsearched = texInput.current.value

    console.log(thingsearched)


    API.findAll(thingsearched)
      .then(res => {
        console.log(res)
        setItemState({
          name: res[0].name,
          image: res[0].image,
          saleprice: res[0].salePrice,
          link: res[0].url,
          reviews: res[0].customerReviewAverage

        })
      })
      .catch(err => console.log(err));
  }

  return (
    <React.Fragment>
      <h1 style={centertext}>Home Page</h1>
      <Form style={centercontent}>
        <FormControl ref={texInput} type="text" placeholder="Search items by exact name..." className="mr-sm-2" />
        <button onClick={handleFormSubmit}>submit</button>
      </Form>
      <p>Some exact names are:</p>
      <ul style={floated}>
        <li>CORDLESS HAND VACUUM</li>
        <li>THERMO-ELECTRIC WINE COOLER 16-BOTTLES</li>
        <li>TARGUS USB 3.0 SUPERSPEED DUAL VIDEO SMB</li>
        <li>24 Days (DVD)</li>
        <li>Fabriclive.46 [CD]</li>
      </ul>
      <center>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={itemState.image} style={picturewidth} />
          <Card.Body>
            <Card.Title>{itemState.name}</Card.Title>
            <Card.Text>${itemState.saleprice}</Card.Text>
            <Button variant="primary" href={itemState.link}>Item Link</Button>
            <br></br><br></br>
            <Button variant="secondary" href="/Cart">Add to Cart</Button>
          </Card.Body>
        </Card>
      </center>
    </React.Fragment>
  );
}

export default Home;
