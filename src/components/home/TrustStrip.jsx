import React from "react";
import { BadgeCheck, PencilRuler, Truck, Layers, Scissors, MapPin } from "lucide-react";

const items = [["Quality Printing", BadgeCheck],["Custom Designs", PencilRuler],["Fast Delivery", Truck],["Flex & Offset", Layers],["Laser Cutting", Scissors],["Local Service", MapPin]];

export default function TrustStrip() {
  return <section className="trust-strip"><div className="container trust-grid">{items.map(([t, Icon]) => <div key={t}><Icon/><span>{t}</span></div>)}</div></section>;
}