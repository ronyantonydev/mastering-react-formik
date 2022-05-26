import React from "react";
import { MenuItem } from "@material-ui/core";
import { Select } from "@mui/material";

const MuiSelectField = React.memo(
  ({ value, handleChange, options, name }: any) => {
    return (
      <div>
        <Select name={name} value={value} onChange={handleChange}>
          {options.map((obj: any, key: any) => {
            return (
              <MenuItem key={key} value={obj.day}>
                {obj.day}
              </MenuItem>
            );
          })}
        </Select>
      </div>
    );
  }
);

export default MuiSelectField;
