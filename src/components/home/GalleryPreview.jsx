import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import { gallery } from "../../data/gallery";

export default function GalleryPreview() {
  return <section className="section"><div className="container">
    <SectionHeading eyebrow="OUR RECENT WORK" title="Real Projects. Happy Customers." />
    <div className="gallery-strip">{gallery.slice(0,6).map(g => <img key={g.title} src={g.image} alt={g.title}/>)}</div>
    <div className="center mt-24"><Link className="btn btn-outline" to="/gallery">View Gallery →</Link></div>
  </div></section>;
}