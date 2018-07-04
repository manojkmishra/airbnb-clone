import * as React from "react";
import { RegisterView } from "./ui/RegisterView";

// container -> view
// container -> connector -> view
// controller -> connector -> view
export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log('/src/modules/register/registerconnector.tsx--dummysubmit()-values=',values);
    return null;
  };

  render() {   console.log('/src/modules/register/registerconnector.tsx--this.props=',this.props);
    return <RegisterView submit={this.dummySubmit} />;
  }
}