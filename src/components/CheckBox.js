import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckBox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          size="small"
          color="primary"
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Like"
    />
  );
};

export default CheckBox;
