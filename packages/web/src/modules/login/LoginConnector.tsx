import * as React from "react";
import { LoginController } from "@airbnb/controller";

import { LoginView } from "./ui/LoginView";
import { RouteComponentProps } from "react-router-dom";

export class LoginConnector extends React.PureComponent <
RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/");
};
 // dummySubmit= async (values:any)=> { console.log('/web/src/mod/login/connector-values=',values); return null;};
  render() {
  //  return (<LoginView submit={this.dummySubmit} />    );
       return (
          <LoginController>
            {({ submit }) => <LoginView onFinish={this.onFinish} submit={submit} />}
          </LoginController>
       );
  }
}