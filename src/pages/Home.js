import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Device from "react-device-frame";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";

@inject("store")
@observer
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store.appState;
  }

  handleName(e) {
    let value = e.target.value;
    this.store.setName(value);
  }

  handleColor(e) {
    let value = e.target.value;
    this.store.setColor(value);
  }

  handleUri(e) {
    e.preventDefault();
    let value = document.querySelector(".url").value;
    this.store.setUri(value);
  }

  goBack() {
    this.props.history;
  }

  render() {
    const { name, color, url } = this.store;
    return (
      <div className="page home">
        <a
          href="https://github.com/kimolalekan/device-view"
          className="github-corner"
          target="_blank"
          aria-label="View source on Github"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 250 250"
            style={{
              fill: "#151513",
              color: "#fff",
              position: "absolute",
              top: 0,
              border: 0,
              right: 0
            }}
            aria-hidden="true"
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style={{ transformOrigin: "130px 106px" }}
              className="octo-arm"
            />
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            />
          </svg>
        </a>

        <Container>
          <form className="row" onSubmit={this.handleUri.bind(this)}>
            <div className="navigation">
              <button type="button">&larr;</button>
              <button type="button">&rarr;</button>
            </div>
            <div className="browser">
              <input
                className="url"
                type="url"
                required
                placeholder="http://"
              />
            </div>
            <div className="go">
              <button type="submit">Go</button>
            </div>
          </form>

          <select onChange={this.handleName.bind(this)}>
            <option value="">Choose device</option>
            <option value="iphone-x">iPhone X</option>
            <option value="iphone-8" selected>
              iPhone 8
            </option>
            <option value="iphone-8plus">iPhone 8 Plus</option>
            <option value="iphone-5s">iPhone 5S</option>
            <option value="iphone-5c">iPhone 5c</option>
            <option value="iphone-4s">iPhone 4s</option>
            <option value="ipad-mini">iPad Mini</option>
            <option value="nexus-5">Nexus 5</option>
            <option value="galaxy-s5">Galaxy S5</option>
            <option value="galaxy-note8">Galaxy Note8</option>
            <option value="htc-one">HTC One</option>
            <option value="lumia-920">Lumia 920</option>
            <option value="macbook-pro">MacBook Pro</option>
          </select>

          <select onChange={this.handleColor.bind(this)}>
            <option>Choose color</option>
            <option value="gold" selected>
              Gold
            </option>
            <option value="silver">Silver</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
          </select>

          <div className="device-view">
            <Device name={name} color={color} url={url} />
          </div>

          <footer>
            <p>
              Developed by{" "}
              <a href="https://github.com/kimolalekan" target="_blank">
                Olalekan Animashaun.{" "}
              </a>
              Device view based on{" "}
              <a
                href="https://github.com/kimolalekan/react-device-frame"
                target="_blank"
              >
                React Device Frame
              </a>{" "}
              and{" "}
              <a href="http://marvelapp.github.io/devices.css/" target="_blank">
                Devices.css
              </a>
            </p>
          </footer>
        </Container>
      </div>
    );
  }
}
