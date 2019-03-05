import React from "react";
import NewSchedule from "./new-schedule-btn.js";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  content: {
    margin: "auto",
    height: "89vh",
    display: "flex", 
    alignItems: "center",
    justifyContent: "center",
  },
});

function HomePage(props){
  const { classes } = props
  return (
    <Grid className={classes.content} item xs={12} sm={8} md={6}>
      <NewSchedule style={{ fontSize: "63px" }}/>
    </Grid>
  );
}

const Home = withStyles(styles)(HomePage);
export default Home;