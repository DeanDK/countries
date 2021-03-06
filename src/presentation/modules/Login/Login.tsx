import React, { useContext } from "react"
import { Formik, Field, Form, FormikErrors } from "formik"
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"

import { LoginContainer } from "./Login.styles"
import { RootStoreContext } from "../../../domain/stores/rootStore"
import Button from "./../../components/Button"
import Input from "../../components/Input"

const Login: React.FC = () => {
  const router = useRouter()

  const rootStore = useContext(RootStoreContext)

  const [_, setCookie] = useCookies(["firebaseUser"])

  const { login } = rootStore.userStore

  const handleSubmit = async (
    { email, password },
    setErrors: (
      errors: FormikErrors<{ email: string; password: string }>
    ) => void
  ) => {
    try {
      const { user } = await login(email, password)
      setCookie("firebaseUser", user)
      router.push({ pathname: "/map" })
    } catch (e) {
      if (e.code === "auth/invalid-email") {
        setErrors({ email: e.message, password: "" })
      } else if (e.code === "auth/wrong-password") {
        setErrors({ email: "", password: e.message })
      }
    }
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        handleSubmit(values, setErrors)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <LoginContainer>
            <Field name='email'>
              {({ field }) => (
                <Input
                  required
                  label='Email'
                  name='email'
                  autoFocus
                  fieldData={field}
                />
              )}
            </Field>
            <Field name='password'>
              {({ field }) => (
                <Input
                  required
                  label='Password'
                  name='password'
                  autoFocus
                  fieldData={field}
                />
              )}
            </Field>
            <Button width={15} label='Login' type='submit'></Button>
          </LoginContainer>
        </Form>
      )}
    </Formik>
  )
}

export default Login
