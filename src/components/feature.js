import React, { Component } from "react";
import { IoIosPhonePortrait, IoMdDesktop } from "react-icons/io";
import "../css/feature.css";
import { Container } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";

export default class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <section>
          <div>
            <h1>Trade. Anywhere.</h1>
            <p>
              Stay connected with the latest charts and markets using our
              Android and iOS apps or you can trade from your desktop using our
              specialised trading app for Mac or Windows.
            </p>
            <div className="btns">
              <div className="fbuttons ficons">
                <div>
                  <IoIosPhonePortrait className="icons" />
                </div>
                <div className="btn-text">
                  Download For <h4>Mobile</h4>
                </div>
              </div>
              <div className="fbuttons ficons">
                <div>
                  <IoMdDesktop className="icons" />
                </div>
                <div className="btn-text">
                  Download For <h4>Desktop</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={require("../images/stock-system.png")} />
          </div>
        </section>
        <section>
          <div>
            <h1>Integration with ease</h1>
            <p>
              The Binance API is designed to provide an easy and efficient way
              to integrate your trading application into our platform.
            </p>
            <div className="fbuttons">Official Binance API Documentation</div>
          </div>
          <div>
            <img src={require("../images/stock-git.png")} />
          </div>
        </section>
        <div className="container-ui">
          <h2>Get in touch. Stay in touch.</h2>
          <Row>
            <Col className="support-col">
              <img src={require("../images/headphone.svg")} />
              <h4>24 / 7 Support</h4>
              <p>
                Got a problem? Just get in touch. Our support team is available
                24/7.
              </p>
            </Col>
            <Col className="support-col">
              <img src={require("../images/paper.svg")} />
              <h4>Binance Blog</h4>
              <p>
                News and updates from the world’s leading cryptocurrency
                exchange.
              </p>
            </Col>
            <Col className="support-col">
              <img src={require("../images/chat.svg")} />
              <h4>Community</h4>
              <p>
                Binance is global. Join the discussion in our worldwide
                communities.
              </p>
            </Col>
            <Col className="support-col">
              <img src={require("../images/user.svg")} />
              <h4>Career</h4>
              <p>
                Help build the future of technology. Start your new career at
                Binance.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
