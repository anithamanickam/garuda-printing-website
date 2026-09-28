import React from "react";
import { Link } from "react-router-dom";

export default function LaserShowcase() {
  return <section className="wide-showcase laser">
    <div className="container showcase-inner"><div className="showcase-copy light"><div className="eyebrow">NOW CREATING CUSTOM LASER PRODUCTS</div><h2>Acrylic <span>+</span> Wood <span>+</span> MDF <span>+</span> Mirror</h2><div className="mini-products"><span>Name Boards</span><span>QR Stands</span><span>Wall Clocks</span><span>Wedding Decor</span><span>Custom Designs</span></div><Link className="btn btn-dark-outline" to="/laser">Explore Laser Products →</Link></div></div>
  </section>;
}