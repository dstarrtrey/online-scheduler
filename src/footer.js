import React from "react";
import "./footer.css";
import { NaturePeopleSharp, PersonPin, Link } from "@material-ui/icons/";
export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <NaturePeopleSharp />
        <span> © Copyright David Starr 2019 </span>
        <NaturePeopleSharp />
        <div>
          <PersonPin />
          <small><a href="http://www.github.com/dstarrtrey">GitHub</a> / <a href="http://www.davidstarr.me">Portfolio</a> / <a href="http://www.linkedin.com/in/david-l-starr">LinkedIn</a> / <a href="http://www.twitter.com/whoisdavidstarr">Twitter</a></small>
          <Link />
        </div>
      </footer>
    );
  }
}