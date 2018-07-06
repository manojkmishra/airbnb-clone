
import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";

interface Props {  children: (    data: { submit: (values: any) => Promise<null> }  ) => JSX.Element | null; }

  // export class RegisterController extends React.PureComponent<Props> 
class C extends React.PureComponent<ChildMutateProps<Props, any, any>> 
{
    submit = async (values: any) => 
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
  mutation($email: String!, $password: String!) 
  {    register(email: $email, password: $password) {  path  message  }
  }
`;

export const RegisterController = graphql(registerMutation)(C);