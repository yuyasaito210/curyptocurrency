import React, { Component } from "react";
import { Container } from "react-bootstrap";
export default class Searchbar extends Component {
  render() {
    return (
      <Container className="mw-400">
        <div className="card-body row no-gutters align-items-center searchWine">
          <div className="col">
            <i className="fa fa-search h4 text-body" />
            <input
              className="form-control form-control-lg form-control-borderless"
              type="search"
              placeholder="Search coin name"
            />
          </div>
        </div>
      </Container>
    );
  }
}
