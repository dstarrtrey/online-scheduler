import React from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core";
import { Add, Today } from "@material-ui/icons/";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme.js";
import HomeModal from "./new-schedule-form.js";
const styles = theme => ({
  button: {
    fontSize: "5vh",
    textAlign: "center",
    margin: "0 2%",
    width: "96%"
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: "5vh"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
    fontSize: "5vh"
  }
});
class NewSchedule extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClick(){
    this.setState({
      openModal: true
    });
  }
  handleClose(){
    this.setState({
      openModal: false
    });
  }
  render(){
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <Button onClick={this.handleClick} variant="contained" size="large" color="secondary" className={classes.button}>
          <Add className={classes.leftIcon} />
          New Schedule
          <Today className={classes.rightIcon} />
        </Button>
        <HomeModal open={this.state.openModal} onClose={this.handleClose}/>
      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles)(NewSchedule);