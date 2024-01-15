import React from "react";

const Section = ({ title, items }) => (
  <div>
    <h5 className="mt-2">{title}</h5>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Section;
