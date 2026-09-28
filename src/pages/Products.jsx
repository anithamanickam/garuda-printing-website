import React, { useState } from "react";
import SectionHeading from "../components/common/SectionHeading";
import WhatsAppButton from "../components/common/WhatsAppButton";
import { products } from "../data/products";

export default function Products() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(products.map(p=>p.category))];
  const list = filter === "All" ? products : products.filter(p=>p.category===filter);
  return <div className="page"><div className="container"><SectionHeading eyebrow="OUR PRODUCTS" title="Popular Printing Products"/><div className="filters">{categories.map(c=><button key={c} className={filter===c?"active":""} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="product-grid product-grid-page">{list.map(p=><article className="product-card" key={p.title}><img src={p.image} alt={p.title}/><div className="product-info"><h3>{p.title}</h3><small>{p.price}</small><WhatsAppButton label="WhatsApp Enquiry" message={`Hi, I am interested in ${p.title}.`}/></div></article>)}</div></div></div>;
}