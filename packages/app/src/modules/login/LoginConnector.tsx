import * as React from "react";
import { LoginController } from "@airbnb/controller";
import { LoginView } from "./ui/LoginView";
import { SecureStore } from "expo";
import { SID_KEY } from "../shared/constants";

export class LoginConnector extends React.PureComponent {
 //  dummySubmit = async (values: any) => {    console.log('app/login/loginconnector.tsx-values=',values);    return null;  };
 // render()   {//  return <LoginView submit={this.dummySubmit}/>; }
 saveSessionId = (sid: string) => {  SecureStore.setItemAsync(SID_KEY, sid);};
  render() {
    return (
      <LoginController onSessionId={this.saveSessionId}>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    );
}
}