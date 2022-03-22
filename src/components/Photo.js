import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/illu.svg";

export default function Photo() {
  return (
    <div className="image">
      <Link to="/">
        <Logo />
      </Link>
    </div>
  );
}
