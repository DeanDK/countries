import React from "react";
import { Formik, Field, Form } from "formik";

import { LoginContainer } from "./Login.styles";
import firebaseClient from "../../firebase";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Login: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        const { email, password } = values;
        const response = await firebaseClient.login(email, password);
        console.log(response);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <LoginContainer>
            <Field name="email">
              {({ field }) => (
                <Input required label="Email" autoFocus field={field} />
              )}
            </Field>
            <Field name="password">
              {({ field }) => (
                <Input required label="Password" autoFocus field={field} />
              )}
            </Field>
            <Button width={15} label="Login" type="submit"></Button>
          </LoginContainer>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
