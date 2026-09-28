import React, { useState } from "react";
import { Send } from "lucide-react";
import { whatsappUrl } from "../../data/site";

export default function QuoteForm() {
  const [form, setForm] = useState({name:"",phone:"",product:"",quantity:"",message:""});
  const submit = e => {
    e.preventDefault();
    const msg = `Quote Request%0AName: ${form.name}%0APhone: ${form.phone}%0AProduct: ${form.product}%0AQuantity: ${form.quantity}%0ARequirement: ${form.message}`;
    window.open(whatsappUrl(msg), "_blank");
  };
  return <section className="quote-section"><div className="container quote-grid">
    <div className="quote-copy"><div className="eyebrow">NEED A QUOTE?</div><h2>Tell us what you need and we'll get back to you.</h2><p>Share your requirement and our team will contact you with pricing and options.</p></div>
    <form className="quote-form" onSubmit={submit}><div className="form-row"><input required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><input required placeholder="Phone / WhatsApp" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></div><div className="form-row"><input placeholder="Product / Service" value={form.product} onChange={e=>setForm({...form,product:e.target.value})}/><input placeholder="Quantity" value={form.quantity} onChange={e=>setForm({...form,quantity:e.target.value})}/></div><textarea placeholder="Any special requirements?" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/><button className="btn btn-primary" type="submit">Request Quote <Send size={16}/></button></form>
  </div></section>;
}