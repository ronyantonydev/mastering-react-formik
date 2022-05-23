import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../components/textField/textField";
import Registered from "../registered/registered";
import RegisterPageStyle from "./registerPageStyle";
import MuiTextField from "../../components/muiTextField/muiTextField";

const Register: React.FC<{}> = () => {
  const [logIn, setLogIn] = useState(false);

  const validate = Yup.object({
    firstName: Yup.string().required("Please enter your first name."),
    lastName: Yup.string().required("Please enter your last name."),
    email: Yup.string().required("Please enter your email."),
    password: Yup.string()
      .min(6, "password must be at least 6 characters")
      .required("Required password")
  });

  return (
    <RegisterPageStyle>
      {logIn ? (
        <Registered />
      ) : (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
            setLogIn(true);
          }}
          validationSchema={validate}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="name-container">
                <div className="register-title">Register</div>
                <div className="label-description">(no labels)</div>
                <div className="text-field-container">
                  <TextField
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    placeholder="First Name*"
                    label=""
                    handleChange={handleChange}
                    autoComplete="disabled"
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                  <TextField
                    name="lastName"
                    type="text"
                    value={values.lastName}
                    placeholder="Last Name*"
                    label=""
                    handleChange={handleChange}
                    autoComplete="disabled"
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </div>
                <div className="text-field-container">
                  <TextField
                    name="email"
                    type="text"
                    value={values.email}
                    placeholder="Email*"
                    label=""
                    handleChange={handleChange}
                    autoComplete="disabled"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </div>
              </div>
              <div className="password-container">
                <div className="text-field-container">
                  <MuiTextField
                    variant="outlined"
                    label="password"
                    name="password"
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </div>
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
    </RegisterPageStyle>
  );
};

export default Register;
