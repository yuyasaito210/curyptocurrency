import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import "../css/specification.css";

export default class Specification extends Component {
  render() {
    return (
      <Container fluid className="specification">
        <Row className="heading">
          <h1>Experience the cutting edge</h1>
        </Row>
        <Row>
          <Col>
            <img src={require("../images/bolt.png")} className="spec-image" />
            <h1>Fast</h1>
            <p>
              Binance offers unwavering performance with our world-class
              matching engine, supporting up to 1,400,000 orders per second. We
              ensure fast and reliable crypto trading, even at peak times.
            </p>
          </Col>

          <Col>
            <img src={require("../images/circle.png")} className="spec-image" />
            <h1>Simple</h1>
            <p>
              Crypto trading with Binance is easy. Get started in minutes with
              our guide to crypto trading on Binance.
            </p>
          </Col>
          <Col>
            <img src={require("../images/chrest.png")} className="spec-image" />
            <h1>Secure</h1>
            <p>
              We protect your assets with a multi-tier & multi-cluster system
              architecture. And with our SAFU (Secure Assets Fund for Users)
              guarantee, you can rest assured that your funds are secure with
              Binance.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
