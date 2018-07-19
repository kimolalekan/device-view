import { observable, action } from "mobx";

export default class AppState {
  @observable name = "iphone-8";
  @observable color = "gold";
  @observable url = "https://codepen.io/yemon/full/pWoROm/";
  @observable title = "Mobile View";

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
  clearItems() {
    this.url = "";
  }
}
