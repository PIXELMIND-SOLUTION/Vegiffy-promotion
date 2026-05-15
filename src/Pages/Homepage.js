import React from "react";
import Navbar from "./Navbar";
import AIHomepage from "./AIHomepage";
import KeyFeatures from "./KeyFeatures";
import WhyChooseAlludeAI from "./WhyUs";
import AboutAlludeAI from "./AboutUs";
import ContactUs from "./ContactUs";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";
import BecomePartner from "./BecomePartner";
import FoundersMessage from "./FoundersMessage";
import WhatMakesDifferent from "./WhatMakesDifferent";
import VegiffyyFAQs from "./VegiffyyFAQs";
import PatnerSection from "./PatnerSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* All Components with IDs */}
      <div className="pt-20">
        <section id="home">
          <AIHomepage />
        </section>

        <section id="features">
          <WhatMakesDifferent />
        </section>


        <section id="about">
          <AboutAlludeAI />
        </section>

        <section id="download">
          <DownloadApp />
        </section>

        <section id="becomepartnet">
          <BecomePartner />
        </section>

        <section id="becomepartnet">
          <PatnerSection/>
        </section>


        <section id="becomepartnet">
          <FoundersMessage />
        </section>

        <section id="contact">
          <VegiffyyFAQs />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;