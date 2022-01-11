import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <h1>About</h1>
    </div>
  );
};

export default About;
