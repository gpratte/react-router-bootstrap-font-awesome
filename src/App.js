import "./App.css"
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="body">
    <Container>
      <Row className="justify-content-center text-center">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col>
          <Routes>
            <Route path="*" element={<Home/>}/>
          </Routes>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default App;
