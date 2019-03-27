import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { theme } from "./theme.js";
import { AddCircleOutline } from "@material-ui/icons/";


const styles = theme => ({
  noEvent: {
    color: "#651010",
    margin: "5px 2%",
    width: "96%",
    height: "calc(100% - 5px)",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 10,
    cursor: "pointer",
    opacity: 0,
    "&:hover": {
      opacity: 0.5,
      backgroundColor: "#d9d9d9",
    },
    fontSize: 40,
    lineHeight: "40px",
  },
});
class NoEvent extends React.Component {
  constructor(props){
    super(props);
    this.state = { openModal: false };
    this.handleModal = this.handleModal.bind(this);
  }
  handleModal(){
    this.setState({ openModal: !this.state.openModal })
  }
  render(){
    const { classes } = this.props;
    return (
        <div onClick={this.handleModal}className={classes.noEvent}>
          <AddCircleOutline />
        </div>
    );
  }
}

NoEvent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles(theme))(NoEvent);
