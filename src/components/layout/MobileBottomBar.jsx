import React from "react";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { site, whatsappUrl } from "../../data/site";

export default function MobileBottomBar() {
  return (
    <div className="mobile-bottom">
      <a href={`tel:${site.phone}`}><Phone/> <span>Call</span></a>
      <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle/> <span>WhatsApp</span></a>
      <a href="/contact"><FileText/> <span>Quote</span></a>
    </div>
  );
}