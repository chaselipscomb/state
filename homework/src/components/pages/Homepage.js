import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import API from "../utils/API";


const centertext = {
  textAlign: "center"
};
const centercontent = {
  alignContent: "center"
}
const row = {
  backgroundColor: 'lightblue',
  height: 'auto',
};
/*const picture = {
  padding: '5px',
  textAlign: 'center',
  marginLeft: '30px'

};*/
const text = {
  textAlign: 'center',
  padding: '25px'

}

function Home() {

  let texInput = useRef();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    let thingsearched="";
    thingsearched = texInput.current.value

    console.log(thingsearched)

    API.findAll(thingsearched)
        .then(res => {
            /*if (res.data.status === "error") {
                throw new Error(res.data.message);
            }*/
            console.log(res)
            //this.setState({ users: res.data.results, error: "" });
        })
        //.catch(err => this.setState({ error: err.message }));
  };


  return (
    <React.Fragment>
      <h1 style={centertext}>Home Page</h1>
      <Form inline style={centercontent}>
        <FormControl ref={texInput} type="text" placeholder="Search something..." className="mr-sm-2" />
        <button onClick={handleFormSubmit}>submit</button>
      </Form>
      <Container style={row}>
        <Row>
          <Col style={text}>picture</Col>
          <Col style={text}>name</Col>
          <Col style={text}>phone</Col>
          <Col style={text}>email</Col>
          <Col style={text}>dob</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Home;
