import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import QuoteForm from "../components/home/QuoteForm";
import { site } from "../data/site";

export default function Contact() {
  return <div className="page"><div className="container"><div className="contact-top"><div><div className="eyebrow">CONTACT US</div><h1>Let's Print Your Next Idea</h1><p>Send your requirement and we'll help you choose the right printing or laser-cut solution.</p><div className="contact-list"><a href={`tel:${site.phone}`}><Phone/> {site.displayPhone}</a><a href={`mailto:${site.email}`}><Mail/> {site.email}</a><a href={site.mapsUrl} target="_blank" rel="noreferrer"><MapPin/> {site.address}</a></div></div><iframe className="map" title="Sri Garuda Printing map" src="https://www.google.com/maps?q=Tamil%20Nadu&output=embed"></iframe></div></div><QuoteForm/></div>;
}