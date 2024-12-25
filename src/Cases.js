import React from "react";
import "../src/Cases.css";


function Cases(props) {
    const cases = props.numbers;
    const listItems = cases.map((item) =>
      <li className="case">{item}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export default Cases