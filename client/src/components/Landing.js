import React from 'react';
import { Jumbotron, Container, Media, Row, Col } from 'reactstrap';
import './style/style.css';

const Landing = (props) => {
  return (
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome!</h1>
          <p className="lead">This is a course & professor rating site for NEU-SV students</p>
        </Container>
      <Row>
      <img src={require("../data/neu.jpg")} alt="NEU" />
      </Row>
    </Jumbotron>
  );
};

export default Landing;