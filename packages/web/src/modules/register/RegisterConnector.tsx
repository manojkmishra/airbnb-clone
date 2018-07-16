import * as React from "react";
import { RegisterView } from "./ui/RegisterView";
import { RegisterController } from "@airbnb/controller";
import { RouteComponentProps } from "react-router-dom";


// export class RegisterConnector extends React.PureComponent 
export class RegisterConnector extends React.PureComponent<RouteComponentProps<{}>>
{
  onFinish = () => {
    this.props.history.push("/m/confirm-email", {
      message: "check your email to confirm your account"
    });
};
  render() {    console.log('web/src/modules/register/registerconnector.tsx--this.props=',this.props);
   // return <RegisterView submit={this.dummySubmit} />;
   return (
    <RegisterController>
      {({ submit }) => (
        <RegisterView onFinish={this.onFinish} submit={submit} />
      )}
    </RegisterController>
  );
}
}