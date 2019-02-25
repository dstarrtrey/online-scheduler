import React from "react";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core";
import { Today } from "@material-ui/icons/";
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
    <Button variant="contained" color="primary" className={classes.button}>
      Upload
      <Today className={classes.rightIcon} />
    </Button>
  );
}
NewSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NewSchedule);