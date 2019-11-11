import React, { Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";

export default props => (
  <Paper style={props.styles}>
    <Fragment>
      <Typography variant="h6" style={{ textTransform: "capitalize" }}>
        Welcome!
      </Typography>
    </Fragment>
  </Paper>
);
