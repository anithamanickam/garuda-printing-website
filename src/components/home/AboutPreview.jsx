import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, ShieldCheck } from "lucide-react";

export default function AboutPreview() {
  return <section className="section"><div className="container about-preview">
    <div><div className="eyebrow">ABOUT SRI GARUDA PRINTING</div><h2>Your Trusted Printing Partner</h2><p>We are a local printing team delivering quality flex, offset, digital and laser-cut services for businesses, events, weddings and custom projects.</p><Link className="btn btn-outline" to="/about">Learn More →</Link></div>
    <div className="stats"><div><b>10+</b><span>Years of Experience</span></div><div><b>1,000+</b><span>Happy Customers</span></div><div><b>500+</b><span>Products & Designs</span></div></div>
    <div className="location-card"><MapPin/><div><b>Local Service</b><span>Tamil Nadu, India</span></div><Clock/><div><b>Fast Response</b><span>WhatsApp support</span></div><ShieldCheck/><div><b>Quality Focused</b><span>Careful production</span></div></div>
  </div></section>;
}