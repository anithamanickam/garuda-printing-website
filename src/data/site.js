export const site = {
  name: "Sri Garuda Printing",
  shortName: "Sri Garuda Printing",
  phone: "919042044428",
  displayPhone: "+91 90420 44428",
  email: "info@srigrudaprinting.com",
  address: "No.1 Valarmathi Complex, Annanagar, Trichy Road, Palladam, Tamil Nadu, India - 641664",
  mapsUrl: "https://maps.app.goo.gl/E1s7yXKxmm22WZQd6",
  instagram: "#",
};

export function whatsappUrl(message = "Hi Sri Garuda Printing, I would like to get a quote.") {
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
}