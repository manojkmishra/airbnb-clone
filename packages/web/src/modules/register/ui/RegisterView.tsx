import * as React from "react";
import { withFormik, FormikProps, Field, Form } from "formik";
import { validUserSchema } from "@airbnb/common";
import { InputField } from "../../shared/InputField";
import { Form as AntForm, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import { NormalizedErrorMap } from "@airbnb/controller";

// const { Form: AntForm, Icon, Button } = Antd;
const FormItem = AntForm.Item;

interface FormValues {  email: string;  password: string;}

interface Props {
 // submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
 submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    console.log('web/src/modules/register/ui/registerview.tsx--this.props=',this.props);
    
    return (
      <Form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="email"       
            prefix={ <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any  }
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            type="password"
            prefix={ <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any  }
            placeholder="Password"
            component={InputField}
          />
          <FormItem>
            <a className="login-form-forgot" href="">  Forgot password </a>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <Link to="/login">login now!</Link>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);