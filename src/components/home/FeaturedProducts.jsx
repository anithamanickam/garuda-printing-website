import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import WhatsAppButton from "../common/WhatsAppButton";
import { products } from "../../data/products";

export default function FeaturedProducts() {
  return <section className="section soft"><div className="container">
    <SectionHeading eyebrow="POPULAR PRODUCTS" title="Customer Favorites" />
    <div className="product-grid">{products.slice(0,6).map(p => <article className="product-card" key={p.title}>
      <img src={p.image} alt={p.title}/><div className="product-info"><h3>{p.title}</h3><small>{p.price}</small><WhatsAppButton label="WhatsApp Enquiry" message={`Hi, I am interested in ${p.title}. Please share details.`}/></div>
    </article>)}</div>
    <div className="center mt-24"><Link className="btn btn-outline" to="/products">View All Products →</Link></div>
  </div></section>;
}