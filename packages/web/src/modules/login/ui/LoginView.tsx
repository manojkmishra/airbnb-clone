import * as React from "react";
import { Form as AntForm, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import { loginSchema } from "@airbnb/common";
import { Link } from "react-router-dom";

import { InputField } from "../../shared/InputField";
import { NormalizedErrorMap } from "@airbnb/controller";

const FormItem = AntForm.Item;

interface FormValues {  email: string;  password: string;}

interface Props {
  onFinish: () => void;
 // submit: (   values: FormValues  ) => Promise<{    [key: string]: string;  } | null>;
 submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() { console.log('/web/modules/loginView.tsx-this.props=',this.props);
    return (
      <Form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any }
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            type="password"
            prefix={  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any  }
            placeholder="Password"
            component={InputField}
          />
          <FormItem> <Link to="/forgot-password">Forgot password</Link>  </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button" >  login</Button>
          </FormItem>
          <FormItem>  Or <Link to="/register">register</Link>  </FormItem>
        </div>
      </Form>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  validateOnChange: false,
  validateOnBlur: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }else {
      props.onFinish();
}
  }
})(C);