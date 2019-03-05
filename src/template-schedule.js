import React from "react";
import TopTemplate from "./top-template.js";
import BottomTemplate from "./bottom-template.js";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  schedule: {
    backgroundColor: "#f8d1d1",
    width: "100vw",
    margin: "15px 0",
    padding: "2vh 0",
    borderRadius: "5px"
  },
  scheduleName: {
    color: "#440b0b",
    fontWeight: "bold",
    marginLeft: "2vw",
    borderBottom: "1px solid #ffc107",
    display: "inline-block",
  },
  resize: {
    color: "#440b0b",
    fontSize: 50,
    "&:focus": {color: "white", backgroundColor: "#f2aaaa", borderRadius:10}
  }
});
class TemplateSchedule extends React.Component {
  constructor(props){
    super(props);
    this.state={name: props.name}
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event){
    const value = event.target.value
    this.setState({name: value ? value : "N/A"});
  }
  render() {
    const scheduleName = this.state.name;
    const { classes } = this.props;
    return (
      <div className={classes.schedule}>
        <TextField
          id="schedule-title"
          value={scheduleName}
          className={classes.scheduleName}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          margin="normal"
          autoFocus={false}
          onChange={this.handleNameChange}
        />
        <TopTemplate startDate={this.props.startDate} endDate={this.props.endDate} />
        <BottomTemplate />
      </div>
    );
  }
}
const today = new Date();
const nextWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 21
);
TemplateSchedule.defaultProps = {
  name: "New Schedule Name",
  startDate: today,
  endDate: nextWeek
};

TemplateSchedule.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemplateSchedule);