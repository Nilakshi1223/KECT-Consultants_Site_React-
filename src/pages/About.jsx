import React from "react";
import PageBanner from "../components/PageBanner";
import aboutImg from "../assets/safari2.webp"; //banner-about.jpg

const About = () => {
  return (
    <>
      <PageBanner
        title="About Wasgamu Safari"
        subtitle="Discover our journey through the wilderness"
        backgroundImage={aboutImg}
      />
      <div className="max-w-5xl mx-auto px-6 mt-12 mb-24">
        <p className="text-lg text-gray-700">
          Wasgamu Safari is a family-owned wildlife experience provider based in Sri Lanka. With over 10 years of guiding tourists through the rich biodiversity of Wasgamuwa National Park, we offer safe, sustainable, and immersive safari tours led by local experts.
        </p>
      </div>
    </>
  );
};

export default About;
