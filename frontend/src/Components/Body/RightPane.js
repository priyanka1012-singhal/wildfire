import React from "react";
import { Paper, Grid } from "@material-ui/core";
import Map from "../Map";

export default props => (
  <Paper style={props.styles}>
    <Grid container>
      <Grid item xs={12}>
        <Map style={{ height: 800 }}></Map>
      </Grid>
    </Grid>
  </Paper>
);
