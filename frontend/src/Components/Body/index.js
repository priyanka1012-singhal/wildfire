import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const style = {
  leftpaper: { padding: 20, paddingRight: 10, marginTop: 10, marginBottom: 10 },
  rightpaper: { padding: 20, marginLeft: 30, marginTop: 10, marginBottom: 10 }
};

export default function body(props) {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane menuList={props.menuList} styles={style.leftpaper} />
      </Grid>
      <Grid item sm>
        <RightPane styles={style.rightpaper} />
      </Grid>
    </Grid>
  );
}
