import React, { Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";

export default function leftPane(props) {
  return (
    <Paper style={props.styles}>
      {props.menuList.map(menuitem => (
        <Fragment>
          <Typography variant="h6" style={{ textTransform: "capitalize" }}>
            {menuitem}
          </Typography>
        </Fragment>
      ))}
    </Paper>
  );
}
