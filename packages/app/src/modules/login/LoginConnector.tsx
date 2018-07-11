import * as React from "react";
import { LoginController } from "@airbnb/controller";
import { LoginView } from "./ui/LoginView";

export class LoginConnector extends React.PureComponent {
 //  dummySubmit = async (values: any) => {    console.log('app/login/loginconnector.tsx-values=',values);    return null;  };
 // render()   {//  return <LoginView submit={this.dummySubmit}/>; }
  render() {
    return (
      <LoginController>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    );
}
}