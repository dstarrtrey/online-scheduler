import React from "react";
import { Whatshot } from "@material-ui/icons/";
import "./header.css";
export default class Header extends React.Component {

  render() {
    return (
      <header>
        <div>
          <h1>Hot Scheduler<Whatshot /></h1>
          <div className="darker"></div>
        </div>
      </header>
    );
  }
}