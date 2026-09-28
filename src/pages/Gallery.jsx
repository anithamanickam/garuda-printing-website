import React, { useState } from "react";
import SectionHeading from "../components/common/SectionHeading";
import { gallery } from "../data/gallery";

export default function Gallery() {
  const [filter,setFilter] = useState("All");
  const categories=["All",...new Set(gallery.map(x=>x.category))];
  const list=filter==="All"?gallery:gallery.filter(x=>x.category===filter);
  return <div className="page"><div className="container"><SectionHeading eyebrow="OUR WORK" title="Real Projects. Happy Customers."/><div className="filters">{categories.map(c=><button key={c} className={filter===c?"active":""} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="gallery-grid">{list.map(g=><figure key={g.title}><img src={g.image} alt={g.title}/><figcaption>{g.title}<small>{g.category}</small></figcaption></figure>)}</div></div></div>;
}