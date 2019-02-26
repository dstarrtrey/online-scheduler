import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
//Style for homepage
import "./index.css";
//Components to render
import Header from "./header.js";
import Footer from "./footer.js";
import NewSchedule from "./new-schedule.js";
import HomeModal from "./new-schedule-form.js";
function App(props) {
  return (
    <div className="page">
      <Header className="header"/>
      <main 
        className="content">
        <Grid item xs={12} sm={8} md={6}>
          <NewSchedule style={{ fontSize: "63px" }}/>
          <HomeModal />
        </Grid>
      </main>
      <Footer className="footer"/>
    </div>
  );
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
ReactDOM.render(<App/>, document.getElementById("root"));
