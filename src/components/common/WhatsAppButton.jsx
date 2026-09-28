import React from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../data/site";

export default function WhatsAppButton({ label = "WhatsApp Us", message }) {
  return (
    <a className="whatsapp-btn" href={whatsappUrl(message)} target="_blank" rel="noreferrer">
      <MessageCircle size={17} /> {label}
    </a>
  );
}