import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

function Linker() {
  return (
    <div className="about-link">
      <Link to="/about">
        <ArrowForwardIcon />
      </Link>
    </div>
  );
}

export default Linker;
