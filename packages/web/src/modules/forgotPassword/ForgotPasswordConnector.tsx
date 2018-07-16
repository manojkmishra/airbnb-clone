import * as React from "react";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";
import { ForgotPasswordController } from "@airbnb/controller";
import { RouteComponentProps } from "react-router-dom";

export class ForgotPasswordConnector extends React.PureComponent <RouteComponentProps<{}>> 
{ // dummy = async (values: any) =>  {  console.log('/web/forgotpassconnector-values=',values);       return null;    };
onFinish = () => {
  this.props.history.push("/m/reset-password", {
    message: "check your email to reset your password"
  });
};
  render() 
  {  // return <ForgotPasswordView submit={this.dummy} />;
  return (
    <ForgotPasswordController>
      {({ submit }) => <ForgotPasswordView onFinish={this.onFinish} submit={submit} />}
    </ForgotPasswordController>
);
  }
}