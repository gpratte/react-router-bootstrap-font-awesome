import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function Body() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="col-12 text-center">
            Container fluid
          </Col>
        </Row>
        <Row>
          <Col className="d-none d-sm-block col-sm-2 col-lg-3 text-md-center text-xl-end">
            <h2 className="text-center">Left</h2>
            <br/>
            <span>
              align
            </span>
            <br/><br/>
            search has col-12 so it expands but also stays in the column.
            Note that col-12 is the 12 spaces inside the current column so
            the current column is also a container.
            <br/>
            <input type="search" className="col-12" placeholder="search me"/>
            <br/><br/>
            image has img-fluid so it stays in the column
            <br/>
            <img src="jumbled.jpg" className="img-fluid" alt="jumbled houses"/>
          </Col>
          <Col className="col-12 col-sm-8 col-lg-6 text-center">
            align
          </Col>
          <Col className="col-12 col-sm-2 col-lg-3 text-end text-md-center text-xl-start">
            <h2 className="text-center">Right</h2>
            <br/>
            align
            <br/>
            <br/>
            <Row>
              <Col className="col-6">
                This is a col in an embedded row col-6
              </Col>
              <Col className="col-2">
                This is a col in the same row col-2
              </Col>
              <Col className="col-2">
                This is a col in the same row col-2
              </Col>
              <Col className="col-2">
                This is a col in the same row col-2
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <span>
        <br/><hr/>
      </span>
    </>
  )
}