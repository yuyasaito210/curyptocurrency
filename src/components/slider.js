import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/binance-research.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>The World's leading </h3>
              <h4>Cryptocurrency Exchange</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/shutterstock.jpg")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/binance-3.jpg")}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
