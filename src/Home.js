import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function Home() {
  return (
    <>
      <span>
        <br/><hr/>
      </span>
      <h1 className="text-center">
        Home
      </h1>
      <Container fluid>
        <Row>
          <Col className="col-12 text-center">
            Container fluid
          </Col>
        </Row>
        <Row>
          <Col className="col-3 text-start">
            Left 25% text start
            <br/>
            now is the time for all good men to come
            to the aid of their country
            <br/><br/>
            search has col-12 so it expands but also stays in the column
            <br/>
            <input type="search" className="col-12" placeholder="search me"/>
            <br/><br/>
            image has img-fluid so it stays in the column
            <br/>
            <img src="jumbled.jpg" className="img-fluid" alt="jumbled houses"/>
          </Col>
          <Col className="col-6 text-center">
            <i className="fa-solid fa-house fa-3x"></i>
            <br/>
            Center 50% text center
            <br/>
            now is the time for all good men to come
            to the aid of their country
          </Col>
          <Col className="col-3 text-end">
            Center 25% text end
            <br/>
            now is the time for all good men to come
            to the aid of their country
          </Col>
        </Row>
      </Container>
      <span>
        <br/><hr/>
      </span>
    </>
  )
}