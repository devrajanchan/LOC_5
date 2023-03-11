import React from 'react';
import Button from 'react-bootstrap/Button';
import {Card, CardGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import jpmclogo from '../../img/jpmc.jpg'

function MyVerticallyCenteredModal(props) {
  console.log("data",props?.i);
  return (
    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props?.i?.company}</h4>
        <p>
          <h5>Job Designation</h5>
          {props?.i?.description}
          <br/>
          <br/>
          <h5>Designation</h5>
          {props?.i?.jobDesignation}
          <br/>
          <br/>
          <h5>Job Location</h5>
          {props?.i?.location}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
















export default function ExampleCards({i}) {
  console.log("i "+ i.company);
    const [modalShow, setModalShow] = React.useState(false);
  return (
    
    <Card style={{ width: '18rem',display:'flex',justifyContent:'centers' }}>
      <Card.Img variant="top" src={jpmclogo} />
      <Card.Body>
        <Card.Title>{i?.header}</Card.Title>
        <Card.Text>
          {i?.company}
          {i?.skills}
          {/* <ul>
            {skills}
          </ul> */}
        </Card.Text>
        <Button variant="primary" onClick={() => setModalShow(true)}>Go somewhere</Button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        i={i}
      />
      </Card.Body>
    </Card>
    
    
  );
}