import React from "react";
import ContactHero from "@/components/ui/ContactPage/ContactHero";
import ContactForm from "@/components/ui/ContactPage/ContactForm";
import SiteMap from "@/components/ui/ContactPage/SiteMap";
import Footer from "@/components/ui/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className=" flex-col justify-center">
        <ContactHero />
        <ContactForm />
        <SiteMap />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
