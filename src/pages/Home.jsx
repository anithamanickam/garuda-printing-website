import React from "react";
import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import ServicesPreview from "../components/home/ServicesPreview";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WeddingShowcase from "../components/home/WeddingShowcase";
import LaserShowcase from "../components/home/LaserShowcase";
import GalleryPreview from "../components/home/GalleryPreview";
import HowItWorks from "../components/home/HowItWorks";
import QuoteForm from "../components/home/QuoteForm";
import AboutPreview from "../components/home/AboutPreview";

export default function Home() {
  return <><Hero/><TrustStrip/><ServicesPreview/><FeaturedProducts/><WeddingShowcase/><LaserShowcase/><GalleryPreview/><HowItWorks/><QuoteForm/><AboutPreview/></>;
}