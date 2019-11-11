import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const style = {
  leftpaper: {
    height: 800,
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },
  rightpaper: {
    height: 800,
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default function body(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <LeftPane menuList={props.menuList} styles={style.leftpaper} />
      </Grid>
      <Grid item xs={7}>
        <RightPane styles={style.rightpaper} />
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
}
