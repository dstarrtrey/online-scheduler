import React from "react";
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';
//Style for homepage
import "./index.css";
//Components to render
import Header from "./header.js";
import Footer from "./footer.js";
import NewSchedule from "./new-schedule.js";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {openModal: false}
  }
  render() {
    return (
      <div className="page">
        <Header className="header"/>
        <main 
          className="content">
          <Grid item xs={12} sm={8} md={6}>
            <NewSchedule style={{ fontSize: "63px" }}/>
          </Grid>
        </main>
        <Footer className="footer"/>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));
