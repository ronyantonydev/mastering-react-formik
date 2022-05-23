import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../components/textField/textField";
import Registered from "../registered/registered";
import RegisterPageStyle from "./registerPageStyle";
import MuiTextField from "../../components/muiTextField/muiTextField";
import MuiAutocompleteField from "../../components/muitAuotoComplete/muiAutoComplete";
import countries from "../models/countries";
import Box from "@mui/material/Box";
import MuiDatePicker from "../../components/datePicker/datePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MuiSelectField from "../../components/muiSelectField/muiSelectField";

const Register: React.FC<{}> = () => {
  const [logIn, setLogIn] = useState(false);
  const [value, setValue] = React.useState<Date | null>(new Date());

  const validate = Yup.object({
    firstName: Yup.string().required("Please enter your first name."),
    lastName: Yup.string().required("Please enter your last name."),
    email: Yup.string().required("Please enter your email."),
    password: Yup.string()
      .min(6, "password must be at least 6 characters")
      .required("Required password"),
    choosePassword: Yup.string().required("please choose a password"),
    confirmPassword: Yup.string().required("Please confirm your password"),
    phone: Yup.number().required("Please enter a valid phone number"),
    country: Yup.string().required("please select your country")
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
            password: "",
            choosePassword: "",
            confirmPassword: "",
            text: "",
            phone: "",
            country: ""
          }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
            setLogIn(true);
          }}
          validationSchema={validate}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="form-container">
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
                <div className="password-title">reset password</div>
                <div className="label-description">(no labels)</div>
                <div className="text-field-container">
                  <MuiTextField
                    variant="outlined"
                    label="Enter your current password"
                    name="password"
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </div>
                <div className="text-field-container">
                  <MuiTextField
                    variant="outlined"
                    label="choose a new password"
                    name="choosePassword"
                    onChange={handleChange}
                    error={
                      touched.choosePassword && Boolean(errors.choosePassword)
                    }
                    helperText={touched.choosePassword && errors.choosePassword}
                  />
                  <MuiTextField
                    variant="outlined"
                    label="confirm your new password"
                    name="confirmPassword"
                    onChange={handleChange}
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                  />
                </div>
              </div>
              <div className="personal-container">
                <div className="password-title">reset password</div>
                <div className="label-description">(no labels)</div>
                <div className="number-container">
                  <MuiAutocompleteField
                    id="country-select"
                    className="country-field"
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option: any) => option.label}
                    renderOption={(props: any, option: any) => (
                      <Box component="li" {...props}>
                        {option.label} ({option.code}) +{option.phone}
                      </Box>
                    )}
                    renderInput={(params: any) => (
                      <MuiTextField
                        {...params}
                        name="country"
                        label="Choose a country"
                        variant="outlined"
                        handleChange={handleChange}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password"
                        }}
                        error={touched.country && Boolean(errors.country)}
                        helperText={touched.country && errors.country}
                      />
                    )}
                  />
                  <MuiTextField
                    variant="outlined"
                    label=""
                    name="phone"
                    className="number-field"
                    onChange={handleChange}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </div>
                {/* <div>
                  <DatePicker
                    disableFuture
                    label="Responsive"
                    openTo="year"
                    views={["year", "month", "day"]}
                    onChange={(newValue: any) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <MuiTextField variant="outlined" {...params} />
                    )}
                  />
                </div> */}
              </div>
              <div className="more-data-container">
                <div className="password-title">MORE INPUTS</div>
                <TextField
                  name="text"
                  type="text"
                  value={values.text}
                  id="text-area-field"
                  placeholder="Optional textarea"
                  label="Textarea (optional)"
                  handleChange={handleChange}
                  autoComplete="disabled"
                  error={touched.text && Boolean(errors.text)}
                  helperText={touched.text && errors.text}
                />
                <MuiSelectField />
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
