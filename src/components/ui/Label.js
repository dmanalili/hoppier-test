import React from "react";
import Typography from "@material-ui/core/Typography";

const Label = ({ label, value, color = "textPrimary" }) => {
  return (
    <div>
      <Typography variant="overline" color={color}>
        {label}: {value}
      </Typography>
    </div>
  );
};

export default Label;
