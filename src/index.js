// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import ReactDOM from "react-dom"; 
import React from "react";
import { Route, Router } from "react-router-dom";
import { Auth0Provider } from "./components/Auth/react-auth0-spa";
import history from "./utils/history";
import { AUTH_CONFIG } from "./components/Auth/auth0-variables";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const mainRoutes = (
  <Router history={history}>
    <Route
      path="/"
      render={props => (
        <Auth0Provider
          domain={AUTH_CONFIG.domain}
          client_id={AUTH_CONFIG.clientId}
          redirect_uri={AUTH_CONFIG.callbackUrl}
          onRedirectCallback={onRedirectCallback}
        />
      )}
    />
    <div>{ AUTH_CONFIG.domain }</div>
  </Router>
);

ReactDOM.render(mainRoutes, document.getElementById("root"));
