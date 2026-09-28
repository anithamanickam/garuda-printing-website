import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { site, whatsappUrl } from "../../data/site";

const nav = [
  ["/", "Home"], ["/services", "Services"], ["/products", "Products"],
  ["/gallery", "Gallery"], ["/laser", "Laser"], ["/about", "About"], ["/contact", "Contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-mark">SG</div>
          <div><strong>SRI GARUDA</strong><span>PRINTING</span></div>
        </Link>

        <nav className="desktop-nav">
          {nav.map(([to, label]) => <NavLink key={to} to={to} end={to === "/"}>{label}</NavLink>)}
        </nav>

        <div className="header-actions">
          <a className="header-wa" href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp Us</a>
          <a className="call-btn" href={`tel:${site.phone}`}><Phone size={16}/> Call Now</a>
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {nav.map(([to, label]) => <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="mobile-wa">WhatsApp Us</a>
        </div>
      )}
    </header>
  );
}