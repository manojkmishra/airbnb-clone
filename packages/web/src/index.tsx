import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from './App';

import registerServiceWorker from "./registerServiceWorker";
import { client } from "./apollo";
// import { Routes } from "./routes";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
