import React from "react";
import { Formik, Field, Form, FormikErrors } from "formik";

import { LoginContainer } from "./Login.styles";
import firebaseClient from "../../firebase";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Login: React.FC = () => {
  const handleSubmit = async (
    { email, password },
    setErrors: (
      errors: FormikErrors<{ email: string; password: string }>
    ) => void
  ) => {
    try {
      const response = await firebaseClient.login(email, password);
    } catch (e) {
      if (e.code === "auth/invalid-email") {
        setErrors({ email: e.message, password: "" });
      } else if (e.code === "auth/wrong-password") {
        setErrors({ email: "", password: e.message });
      }
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        handleSubmit(values, setErrors);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <LoginContainer>
            <Field name="email">
              {({ field }) => (
                <Input
                  required
                  label="Email"
                  name="email"
                  autoFocus
                  fieldData={field}
                />
              )}
            </Field>
            <Field name="password">
              {({ field }) => (
                <Input
                  required
                  label="Password"
                  name="password"
                  autoFocus
                  fieldData={field}
                />
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
