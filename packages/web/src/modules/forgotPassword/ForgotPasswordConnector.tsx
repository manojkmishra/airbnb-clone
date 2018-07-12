import * as React from "react";
import { ForgotPasswordView } from "./ui/ForgotPasswordView";

export class ForgotPasswordConnector extends React.PureComponent 
{  dummy = async (values: any) => 
    {  console.log('/web/forgotpassconnector-values=',values);
       return null;
    };

  render() 
  {   return <ForgotPasswordView submit={this.dummy} />;
  }
}