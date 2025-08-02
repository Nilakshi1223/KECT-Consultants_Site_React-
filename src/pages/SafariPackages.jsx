import React from "react";
import PageBanner from "../components/PageBanner";
import packagesImg from "../assets/safari3.webp";

const SafariPackages = () => {
  const packages = [
    { title: "Morning Safari", price: "$50", desc: "Explore early morning wildlife." },
    { title: "Full Day Tour", price: "$90", desc: "A full-day adventure with lunch." },
    { title: "Camping Safari", price: "$150", desc: "Stay overnight in the wild." },
  ];
  return (
    <>
      <PageBanner
        title="Safari Packages"
        subtitle="Choose the perfect adventure for you"
        backgroundImage={packagesImg}
      />
      <div className="max-w-6xl mx-auto px-6 mt-12 mb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p, idx) => (
            <div key={idx} className="border p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="mb-2 text-gray-600">{p.desc}</p>
              <span className="text-green-600 font-bold">{p.price}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SafariPackages;
