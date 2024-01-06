import "./App.css"
import React from "react";
import {Container} from "react-bootstrap";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <>
    <Container fluid className="text-center">
      <Header />
    </Container>
      <Container fluid>
        <Home />
      </Container>
      {/*<Row className="justify-content-center text-center">*/}
      {/*  <Col>*/}
      {/*    <Routes>*/}
      {/*      <Route path="*" element={<Home/>}/>*/}
      {/*    </Routes>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
      <Container fluid className="justify-content-center text-center">
        <Footer />
      </Container>
    </>
  )
}

export default App;
