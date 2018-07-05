
import * as React from "react";
interface Props {
  children: (
    data: { submit: (values: any) => Promise<null> }
  ) => JSX.Element | null;
}

  export class RegisterController extends React.PureComponent<Props> 
  {
    submit = async (values: any) => {
      console.log('/controller/src/modules/regcontroller/index.tsx-values=',values);
      return null;
    };
    render() {
   // return <div>hello from controller</div>;
    return this.props.children({ submit: this.submit });
    }
}