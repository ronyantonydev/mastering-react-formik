import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoggedIn from "../loggedIn/loggedIn";
import LogInPageStyle from "./logInPageStyle";
import TextField from "../../components/textField/textField";

const LogInPage: React.FC<{}> = () => {
  const [logIn, setLogIn] = useState(false);

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required E mail"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("Required Password")
  });

  return (
    <LogInPageStyle>
      {logIn ? (
        <LoggedIn />
      ) : (
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
            setLogIn(true);
          }}
          validationSchema={validate}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="text-field-container">
                <TextField
                  name="email"
                  type="email"
                  value={values.email}
                  placeholder="Enter your email"
                  label="E mail"
                  handleChange={handleChange}
                  autoComplete="disabled"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  name="password"
                  type="password"
                  value={values.password}
                  placeholder="Enter your Password"
                  label="Password"
                  handleChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </div>
              <div className="button-container">
                <button className="log-in-button" type="submit">
                  Log In
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </LogInPageStyle>
  );
};

export default LogInPage;
