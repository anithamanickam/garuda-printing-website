import React from "react";
import { Link } from "react-router-dom";

export default function WeddingShowcase() {
  return <section className="wide-showcase wedding">
    <div className="container showcase-inner"><div className="showcase-copy"><div className="eyebrow">YOUR DREAM WEDDING, OUR PRINTING & LASER TOUCH</div><h2>Everything for Your Wedding</h2><div className="mini-products"><span>Invitations</span><span>Welcome Boards</span><span>Name Boards</span><span>Cake Toppers</span><span>Return Gift Tags</span></div><Link className="btn btn-gold" to="/products">Explore Wedding Collection →</Link></div></div>
  </section>;
}