import React from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { DatePicker } from "material-ui-pickers";
//import generateSchedule from "./generate-schedule"; (Not applicable until server is implemented)
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
const styles = theme => ({
  button: {
    margin: "15px 2%",
    width: "96%",
    fontWeight: "bold"
  },
  inLine: {
    display: "inline"
  },
  container: {
    justifyContent: "center",
    display: "grid",
    gridTemplateRows: "auto auto auto"
  },
  paper: {
    textAlign: "center",
    position: "absolute",
    width: theme.spacing.unit * 70,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  },
  textField: {
    marginTop: "15px",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class ScheduleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleName: "New Schedule",
      password: "",
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    event.target.value
      ? this.setState({ scheduleName: event.target.value })
      : this.setState({ scheduleName: "New Schedule" });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleStartDateChange(date) {
    this.setState({ startDate: date });
    if (this.state.endDate < date) this.setState({ endDate: date });
  }
  handleEndDateChange(date) {
    this.setState({ endDate: date });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.scheduleName);
    console.log(this.state.password);
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    //generateSchedule(this.state.scheduleName, this.state.password, this.state.startDate, this.state.endDate);
  }
  render() {
    const classes = this.props.classes;
    const { startDate, endDate } = this.state;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="h4" id="modal-title">
            {this.state.scheduleName}
          </Typography>
          <Typography variant="subtitle1" id="schedule-modal-description">
            With this information we'll generate your online schedule.
          </Typography>
          <form
            onSubmit={this.handleSubmit}
            className={classes.container}
            noValidate
          >
            <div>
              <TextField
                id="name"
                label="Schedule Name"
                placeholder="Name"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onChange={this.handleNameChange}
              />
              <TextField
                id="password"
                label="Password (optional)"
                placeholder="Password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                onChange={this.handlePasswordChange}
              />
            </div>
            <span>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  className={classes.inLine}
                  value={startDate}
                  onChange={this.handleStartDateChange}
                />
                <Typography
                  className={classes.inLine}
                  variant="subtitle2"
                  id="to"
                >
                  {" "}
                  to{" "}
                </Typography>
                <DatePicker
                  className={classes.inLine}
                  value={endDate}
                  onChange={this.handleEndDateChange}
                />
              </MuiPickersUtilsProvider>
            </span>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Submit
              </Button>
            </Grid>
          </form>
          <NewSchedule />
        </div>
      </Modal>
    );
  }
}
ScheduleModal.propTypes = {
  classes: PropTypes.object.isRequired
};
const NewSchedule = withStyles(styles)(ScheduleModal);
export default NewSchedule;
