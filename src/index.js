import React from "react";
import ReactDOM from "react-dom";
//Style for homepage
import "./index.css";
//Components to render
import Header from "./header.js";
import Footer from "./footer.js";
import NewSchedule from "./new-schedule.js";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewSchedule />
        <Footer />
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));
