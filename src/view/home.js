import React, { Component } from "react";
import Slider from "../components/slider";
import NavbarTop from "../components/navbar";
import CurrencyCard from "../components/currencyUSDT";
import Searchbar from "../components/searchbar";
import DatatablePage from "../components/datatable";
import Specification from "../components/specification";
import Feature from "../components/feature";
import FooterCrypt from "../components/footer";
import "../css/home.css";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <Slider />
        <CurrencyCard />
        <div className="search_data">
          <Searchbar />
          <DatatablePage />
        </div>
        <Specification />
        <Feature />
        <FooterCrypt />
      </div>
    );
  }
}
