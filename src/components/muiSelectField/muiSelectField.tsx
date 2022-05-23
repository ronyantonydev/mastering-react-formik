import { Select, styled } from "@material-ui/core";
import React from "react";
import MenuItem from "@mui/material/MenuItem";

const MuiSelectField: React.FC<{
  value?: any;
  handleChange?: any;
  option?: any;
}> = (props) => {
  return (
    <Select
      value={props.value}
      onChange={props.handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={props.value}>{props.option}</MenuItem>
      <MenuItem value={props.value}>{props.option}</MenuItem>
      <MenuItem value={props.value}>{props.option}</MenuItem>
    </Select>
  );
};

export default MuiSelectField;
