import("./styles/scss/app.scss");
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
import { AppContainer } from "react-hot-loader";
import { rehydrate, hotRehydrate } from "rfx-core";

import App from "./components/App";
import stores from "./stores/";

const store = rehydrate();

const renderApp = Component => {
  render(
    <AppContainer>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </AppContainer>,
    document.getElementById("root")
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept(() => renderApp(App));
}
