import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import "../css/footer.css";
import { MDBIcon } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

class FooterCrypt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Container fluid className="footer">
        <div className="footer_content">
          <h1 className="content_AboutUS">Start Trending Now</h1>
          <p className="content_link">
            Trade Bitcoin, BNB, and hundreds of other cryptocurrencies in
            minutes.
          </p>
          <Button
            className="btn-f"
            variant="warning"
            style={{
              marginRight: "44px",
              backgroundColor: "#fbda3c"
            }}
          >
            Register
          </Button>
          <Button variant="outline-light">Exchange now</Button>
        </div>

        <Row className="content_footerdata">
          <Col>
            <p>
              <span className="content_AboutUS">About US</span>
              <br />
              <span className="content_link">About</span>
              <br />
              <span className="content_link">Terms</span>
              <br />
              <span className="content_link">Privacy</span>
              <br />
              <span className="content_link">Fees</span>
              <br />
              <span className="content_link">Careers</span>
              <br />
              <span className="content_link">Announcment</span>
              <br />
              <span className="content_link">Referral</span>
              <br />
              <span className="content_link">Binanace Blog</span>
            </p>
          </Col>
          <Col>
            <p>
              <span className="content_AboutUS">Products</span>
              <br />
              <span className="content_link">Exchange</span>
              <br />
              <span className="content_link">Academy</span>
              <br />
              <span className="content_link">BCF</span>
              <br />
              <span className="content_link">Info</span>
              <br />
              <span className="content_link">Labs</span>
              <br />
              <span className="content_link">LaunchPad</span>
              <br />
              <span className="content_link">Research</span>
              <br />
              <span className="content_link">Trust Wallet</span>
            </p>
          </Col>
          <Col>
            <p>
              <span className="content_AboutUS">Support</span>
              <br />
              <span className="content_link">Downloads</span>
              <br />
              <span className="content_link">Listing Application</span>
              <br />
              <span className="content_link">API Documentation</span>
              <br />
              <span className="content_link">FAQ</span>
              <br />
              <span className="content_link">Support Center</span>
              <br />
              <span className="content_link">Submit a request</span>
              <br />
              <span className="content_link">Business Contacts</span>
              <br />
              <span className="content_link">Buy/Sell Crypto</span>
            </p>
          </Col>
          <Col>
            <p>
              <span className="content_AboutUS">Community</span>
              <br />
              <MDBIcon fa icon="facebook-f" className="content_link" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <MDBIcon fa icon="telegram" className="content_link" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MDBIcon fa icon="twitter" className="content_link" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MDBIcon fa icon="instagram" className="content_link" />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MDBIcon fa icon="reddit-alien" className="content_link" />{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MDBIcon fa icon="vk" className="content_link" />
              <br />
              <DropdownButton
                variant="outline-light"
                id="dropdown-item-button dropdown-button"
                title="English"
              >
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
            </p>
          </Col>
        </Row>
        <div className="content_footerdata">
          <hr style={{ backgroundColor: "grey" }} />
          <span className="content_link">
            © 2017 - 2019 Binance.com. All rights reserved
          </span>
        </div>
      </Container>
    );
  }
}

export default FooterCrypt;
