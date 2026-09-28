import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsappUrl } from "../../data/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-copy">
          <div className="eyebrow">SRI GARUDA PRINTING</div>
          <h1>Printing That Makes <span>Your Ideas Visible</span></h1>
          <p className="hero-tags">Flex <b>•</b> Offset <b>•</b> Digital <b>•</b> Acrylic <b>•</b> Laser Cutting</p>
          <p>From everyday business printing to beautiful custom wedding & event products.</p>
          <div className="hero-buttons">
            <Link className="btn btn-primary" to="/contact">Get a Quote <ArrowRight size={17}/></Link>
            <a className="btn btn-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}