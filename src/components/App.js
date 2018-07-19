import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";

@withRouter
@inject("store")
@observer
export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Routes />
      </div>
    );
  }
}
