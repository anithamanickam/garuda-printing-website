import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { site, whatsappUrl } from "../../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><div className="brand-mark">SG</div><div><strong>SRI GARUDA</strong><span>PRINTING</span></div></div>
          <p>Your trusted printing partner for flex, offset, digital, acrylic and laser-cut products.</p>
          <a className="footer-wa" href={whatsappUrl()} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </div>
        <div><h4>Quick Links</h4><Link to="/services">Services</Link><Link to="/products">Products</Link><Link to="/gallery">Gallery</Link><Link to="/about">About</Link></div>
        <div><h4>Services</h4><Link to="/services">Flex Printing</Link><Link to="/services">Offset Printing</Link><Link to="/services">Business Printing</Link><Link to="/laser">Laser Cutting</Link></div>
        <div><h4>Contact</h4><span><MapPin size={16}/> {site.address}</span><a href={`tel:${site.phone}`}><Phone size={16}/> {site.displayPhone}</a><a href={`mailto:${site.email}`}><Mail size={16}/> {site.email}</a><a href={site.instagram}><Instagram size={16}/> Instagram</a></div>
      </div>
      <div className="footer-bottom"><div className="container">© {new Date().getFullYear()} Sri Garuda Printing. All rights reserved.</div></div>
    </footer>
  );
}