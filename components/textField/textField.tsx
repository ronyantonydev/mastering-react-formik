import React from "react";
import TextFieldStyle from "./textFieldStyle";

const TextField: React.FC<{
  type?: any;
  placeholder?: any;
  name?: any;
  label?: any;
}> = (props) => {
  return (
    <TextFieldStyle>
      <label className="label-container">{props.label}</label>
      <input
        className="input-container"
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
      />
    </TextFieldStyle>
  );
};

export default TextField;
