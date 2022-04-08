import React from "react";
import TextFieldStyle from "./textFieldStyle";

const TextField: React.FC<{
  type?: any;
  placeholder?: any;
  name?: any;
  value?: any;
  label?: any;
  handleChange?: any;
  autoComplete?: any;
  error?: any;
  helperText?: any;
}> = (props) => {
  return (
    <TextFieldStyle>
      <label className="label-container">{props.label}</label>
      <input
        className="input-container"
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        autoComplete={props.autoComplete}
      />
      {props.error && (
        <div className="helper-text-container">{props.helperText}</div>
      )}
    </TextFieldStyle>
  );
};

export default TextField;
