import * as React from "react";
// import { Button } from "react-native-elements";
import { RegisterView } from "./ui/RegisterView";
import { RegisterController } from "@airbnb/controller";

export class RegisterConnector extends React.PureComponent 
{ // dummySubmit = async (values: any) => {    console.log('/modules/reg/regconnector.tsx-values=',values);    return null;  };
 // onPress = () => {    console.log("button pressed");  };
  render() {
   // return <Button title="BUTTON" onPress={this.onPress} />;
   return(<RegisterController>
    {({ submit }) => <RegisterView submit={submit} />}
    </RegisterController>);  
  }
}
