import React from "react";
import TextField from "../../components/textField/textField";
import LogInPageStyle from "./logInPageStyle";

const LogInPage: React.FC<{}> = () => {
  return (
    <LogInPageStyle>
      <div className="text-field-container">
        <TextField type="email" placeholder="Enter your email" label="email" />
        <TextField
          type="password"
          placeholder="Enter your Password"
          label="password"
        />
      </div>
      <div className="button-container">
        <button className="log-in-button">Log In</button>
      </div>
    </LogInPageStyle>
  );
};

export default LogInPage;
