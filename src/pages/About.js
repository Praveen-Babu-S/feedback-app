import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";

function About() {
  return (
    <Card>
      <div className="about">
        <p>
          This is a simple progressive application developed by me when I'm
          learning React Js. This is a simple feedback app.
        </p>
        <p>
          It can be integrate with any application which requires customers
          ratings and reviews about services purchased. It displays the total no
          of reviews and average rating .
        </p>
        <p>
          I have used motion framer package for animation, material-ui icon, css
          for styling, React-Router V6 and Context API to manage global state.
        </p>
        <Link to="/" style={{ textDecoration: "none", color: "red" }}>
          Go to Feedback Page
        </Link>
      </div>
    </Card>
  );
}

export default About;
