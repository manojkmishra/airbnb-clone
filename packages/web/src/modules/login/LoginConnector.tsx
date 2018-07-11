import * as React from "react";

import { LoginView } from "./ui/LoginView";

export class LoginConnector extends React.PureComponent {
  dummySubmit= async (values:any)=> { console.log('/web/src/mod/login/connector-values=',values); return null;};
  render() {
    return (<LoginView submit={this.dummySubmit} />    );
  }
}