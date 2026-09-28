import React from "react";
import SectionHeading from "../components/common/SectionHeading";
import { services } from "../data/services";
import WhatsAppButton from "../components/common/WhatsAppButton";

export default function Services() {
  return <div className="page"><div className="container"><SectionHeading eyebrow="OUR SERVICES" title="Printing & Custom Production Services" text="From everyday business printing to custom wedding, event and laser-cut products."/><div className="service-grid service-grid-page">{services.map(s=><article className="service-card" key={s.slug}><img src={s.image} alt={s.title}/><div className="card-body"><h3>{s.title}</h3><p>{s.description}</p><div className="tag-list">{s.items.map(i=><span key={i}>{i}</span>)}</div><WhatsAppButton label="Enquire Now" message={`Hi, I need a quote for ${s.title}.`}/></div></article>)}</div></div></div>;
}