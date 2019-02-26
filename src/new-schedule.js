import React from "react";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core";
import { Add, Today } from "@material-ui/icons/";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme.js";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});
function NewSchedule(props){
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Button variant="contained" size="large" color="secondary" className={classes.button}>
        <Add className={classes.leftIcon} />
        New Schedule
        <Today className={classes.rightIcon} />
      </Button>
    </MuiThemeProvider>
  );
}
NewSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NewSchedule);