import React from "react";
import {
  Paper,
  Typography,
  ListItem,
  ListItemIcon,
  List,
  Divider
} from "@material-ui/core";
import { AccessAlarm } from "@material-ui/icons";

export default function leftPane(props) {
  return (
    <Paper style={props.styles}>
      <Divider />
      <List>
        {props.menuList.map((menuitem, index) => (
          <ListItem button key={menuitem}>
            <ListItemIcon>
              <AccessAlarm />
            </ListItemIcon>
            <Typography
              variant="h6"
              style={{ color: "#ff9800", textTransform: "capitalize" }}
            >
              {menuitem}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
