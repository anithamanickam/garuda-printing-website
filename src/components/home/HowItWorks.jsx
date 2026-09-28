import React from "react";
import { MousePointer2, FilePenLine, MessageSquareQuote, PackageCheck } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const steps = [["01","Choose Product",MousePointer2,"Select what you need"],["02","Send Design / Requirement",FilePenLine,"Upload or share your details"],["03","Confirm Quote",MessageSquareQuote,"We'll get back to you"],["04","We Print & Deliver",PackageCheck,"On time, every time"]];

export default function HowItWorks() {
  return <section className="section soft"><div className="container"><SectionHeading eyebrow="HOW IT WORKS" title="Simple Steps to Get Your Print" />
  <div className="steps">{steps.map(([n,t,I,d]) => <div className="step" key={n}><div className="step-icon"><I/></div><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>;
}