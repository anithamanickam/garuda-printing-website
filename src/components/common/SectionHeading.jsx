import React from "react";

export default function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}