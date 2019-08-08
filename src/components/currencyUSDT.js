import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/currencyUSDT.css";

export default class CurrencyCard extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <p>
                <span className="line-1">BNB/USDT</span>
                <br />
                <span className="line-2"> 29.785/</span>{" "}
                <span className="line-4">$25.4</span>
                <br />
                <span className="line"> 1 Volume: 64,400,768 USDT</span>
              </p>
            </Col>
            <Col>
              <p>
                <span className="line-1">BNB/USDT</span>
                <br />
                <span className="line-2"> 29.785/</span>{" "}
                <span className="line-4">$25.4</span>
                <br />
                <span className="line"> 1 Volume: 64,400,768 USDT</span>
              </p>
            </Col>
            <Col>
              <p>
                <span className="line-1">BNB/USDT</span>
                <br />
                <span className="line-2"> 29.785/</span>{" "}
                <span className="line-4">$25.4</span>
                <br />
                <span className="line"> 1 Volume: 64,400,768 USDT</span>
              </p>
            </Col>
            <Col>
              <p>
                <span className="line-1">BNB/USDT</span>
                <br />
                <span className="line-2"> 29.785/</span>{" "}
                <span className="line-4">$25.4</span>
                <br />
                <span className="line"> 1 Volume: 64,400,768 USDT</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
