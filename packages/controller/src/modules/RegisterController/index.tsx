
import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {  RegisterMutation,  RegisterMutationVariables} from "./__generated__/RegisterMutation";

interface Props {  children: (    data: { submit: (values:RegisterMutationVariables) => Promise<null> }  ) => JSX.Element | null; }

  // export class RegisterController extends React.PureComponent<Props> 
// class C extends React.PureComponent<ChildMutateProps<Props, any, any>> 
class C extends React.PureComponent< ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>>
{
    submit = async (values: RegisterMutationVariables) => 
    {
      console.log('/controller/src/modules/regcontroller/index.tsx-values=',values);
      const response = await this.props.mutate({   variables: values });
      console.log("/controller/src/modules/regcontroller/index.tsx-response: ", response);
      return null;
    };
    render() {
   // return <div>hello from controller</div>;
    return this.props.children({ submit: this.submit });
    }
}
const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) 
  {    register(email: $email, password: $password) {  path  message  }
  }
`;

// export const RegisterController = graphql(registerMutation)(C);
export const RegisterController = graphql<Props,RegisterMutation, RegisterMutationVariables>(registerMutation)(C);