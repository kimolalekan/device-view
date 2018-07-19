import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

@inject("store")
@observer
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store.appState;
  }

  authenticate(e) {
    if (e) e.preventDefault();
    this.props.store.authenticate();
  }

  render() {
    const { authenticated, authenticating } = this.store;
    return (
      <nav className="nav">
        <div className="nav-right">
          <Link to="/">
            <i className="ion-search" />
          </Link>
          <Link to="/">
            <i className="ion-person" />
          </Link>
          <Link to="/">
            <i className="ion-bag" />
            <sup className="label">30</sup>
          </Link>
        </div>

        <div className="nav-icon">
          <Link to="/">
            <i className="ion-navicon-round" />
          </Link>
        </div>

        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Link to="/" className="logo">
          Demo Header
        </Link>
      </nav>
    );
  }
}
