import { TextField, styled } from "@material-ui/core";

const MuiTextField = styled(TextField)({
  width: `100%`,
  "&.MuiFormControl-root": {
    "& .MuiInputLabel-outlined": {
      fontSize: `0.8rem`
    }
  }
});

export default MuiTextField;
