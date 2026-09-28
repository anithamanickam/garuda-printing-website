import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import { services } from "../../data/services";

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="OUR SERVICES" title="What Can We Print For You?" />
        <div className="service-grid">
          {services.map(s => <article className="service-card" key={s.slug}>
            <img src={s.image} alt={s.title}/>
            <div className="card-body"><h3>{s.title}</h3><p>{s.items.join("  •  ")}</p></div>
          </article>)}
        </div>
        <div className="center mt-24"><Link className="btn btn-outline" to="/services">View All Services →</Link></div>
      </div>
    </section>
  );
}