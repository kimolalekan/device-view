import { observable, action } from "mobx";

export default class AppState {
  @observable name = "iphone-8";
  @observable color = "gold";
  @observable url = "https://codepen.io/yemon/full/pWoROm/";
  @observable orientation = false;
  @observable activePortrait = "active";
  @observable activeLandspace = "";
  @observable title = "Device View";

  @action
  setName(data) {
    this.name = data;
  }

  @action
  setColor(data) {
    this.color = data;
  }

  @action
  setUri(data) {
    this.url = data;
  }

  @action
  setPortrait(data) {
    this.activePortrait = data;
  }

  @action
  setLandscape(data) {
    this.activeLandspace = data;
  }

  @action
  setOrientation(data) {
    this.orientation = data;
  }

  @action
  clearItems() {
    this.url = "";
  }
}
