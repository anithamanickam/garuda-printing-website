import React from "react";
import SectionHeading from "../components/common/SectionHeading";
import WhatsAppButton from "../components/common/WhatsAppButton";

const items=[
  ["Acrylic Name Boards","Custom acrylic lettering and name boards."],
  ["QR Stands","Acrylic QR stands for payments, menus and reviews."],
  ["Wedding Decor","Laser-cut wedding names, signs and décor."],
  ["Wall Clocks","Custom MDF/acrylic clock designs."],
  ["Wood & MDF","Decorative panels, cutouts and signage."],
  ["Custom Designs","Bring your drawing or idea and we'll help prepare it for cutting."]
];

export default function Laser() {
  return <div className="page laser-page"><div className="container"><SectionHeading eyebrow="LASER CUTTING" title="Acrylic • Wood • MDF • Mirror" text="Custom laser-cut products for shops, homes, weddings and events."/><div className="laser-cards">{items.map(([t,d])=><article key={t}><div className="laser-placeholder">LASER</div><h3>{t}</h3><p>{d}</p><WhatsAppButton label="Get Quote" message={`Hi, I need a laser cutting quote for ${t}.`}/></article>)}</div></div></div>;
}