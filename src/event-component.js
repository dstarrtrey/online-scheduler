import React from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { theme } from "./theme.js";


const styles = theme => ({
  event: {
    backgroundColor: theme.palette.primary.light,
    color: "#651010",
    margin: "5px 10px",
    width: 120,
    height: 60,
    textAlign: "center",
    borderRadius: 10
  }
});
function Event(props){
  const { classes } = props;
  return (
      <div className={classes.event}>
        <div><b>{props.event[0].name}</b></div>
        <div>{format(new Date(props.event[0].date), "MM/dd")}</div>
        <div>{props.event[0].time}</div>
      </div>
  );
}

Event.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles(theme))(Event);
