import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //For placeholder link to schedule template
//Style for homepage
import "./index.css";
//Components to render
import Home from "./home-page.js"
import TemplateSchedule from "./template-schedule.js";
import Header from "./header.js";
import Footer from "./footer.js";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {openModal: false}
  }
  render() {
    return (
      <Router>
        <div className="page">
          <div>
            <Header className="header"/>
          </div>
            <main 
              className="content">
              <Route exact path="/" component={Home} />
              <Route path="/template" component={TemplateSchedule} />
            </main>
          <Footer className="footer"/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/template">Template Schedule</Link>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));
