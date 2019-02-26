import React from "react";
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class ScheduleModal extends React.Component{
  state = {
    open: false
  }
  render() {
    const { classes } = this.props;
    
    return (
      <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={this.state.open}
      onClose={this.handleClose}
      >
      <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Text in a modal
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <ScheduleModal />
        </div>
      </Modal>
    )}
}
ScheduleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};
const NewSchedule = withStyles(styles)(ScheduleModal);
export default NewSchedule;
