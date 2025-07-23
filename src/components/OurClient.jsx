import React from 'react';
import { motion } from 'framer-motion';
import Process from '../components/Process.jsx';
// import Together from '../components/Together.jsx'; // Uncomment if needed

// Background image
import clientsBg from "../assets/OurClient.webp"; // Replace with your actual background image path

// Logos imports
import Deepani from "../assets/depani.webp";
import Dream from "../assets/DreamFactory.webp";
import AdamCarbons from "../assets/AdamCarbons.webp";
import Coco from "../assets/sasmina.webp";
import Sanoda from "../assets/Sanoda.webp";
import SLT from "../assets/SLT.webp";
import TropicalTea from "../assets/TropicalCeylonTea.webp";
import Haycolor from "../assets/haycolour_logo.webp";
import Pandora from "../assets/Panora.webp";
import mmnoorbhoy from "../assets/MMN.webp";
import MAS from "../assets/MAS.webp";
import Ondera from "../assets/Ovendra.webp";
import NB from "../assets/NB_.webp";
import Ema from "../assets/ema.webp";
import Rugby from "../assets/Rugby.webp";
import Gmedi from "../assets/GM.webp";
import Nuwani from "../assets/Nuwani.webp";
import Sasra from "../assets/Sahasra.webp";
import SBD from "../assets/Dino.webp";
import LHC from "../assets/lhc-logo.png";
import ST from "../assets/sethum.webp";
import Udayanga from "../assets/Udayanga.webp";
import LS from "../assets/LSSS.webp";
import NF from "../assets/Nouris.webp";
import SA from "../assets/Siyarata.webp";
import LCP from "../assets/Lis.jpg";
import DIL from "../assets/dill.webp";
import KLY from "../assets/kayak.webp";
import Dis from "../assets/desir.webp";
import DTY from "../assets/Daharmasiri.webp";



const clientLogos = [
  { src: Deepani, alt: 'Deepani Enterprises', name: 'Deepani Enterprises' },
  { src: Dream, alt: 'Dream Factory', name: 'Dream Factory' },
  { src: AdamCarbons, alt: 'Adam Carbons', name: 'Adam Carbons' },
  { src: Coco, alt: 'BV Coco pvt ltd', name: 'BV Coco (Pvt) Ltd' },
  { src: Sanoda, alt: 'Sanoda Ayurveda', name: 'Sanoda Ayurveda' },
  { src: SLT, alt: 'SLT Mobitel', name: 'SLT Mobitel' },
  { src: TropicalTea, alt: 'Tropical Ceylon', name: 'Tropical Ceylon' },
  { src: Haycolor, alt: 'Haycolor', name: 'Haycolor' },
  { src: Pandora, alt: 'Panora', name: 'Panora Eye Hospital' },
  { src: mmnoorbhoy, alt: 'MM Noorbhoy', name: 'MM Noorbhoy' },
  { src: MAS, alt: 'MAS Technologies ', name: 'MAS Technologies ' },
  { src: Ondera, alt: 'Ovendra Natural Foods', name: 'Ovendra Natural Foods' },
  { src: Rugby, alt: 'Ceylonese Rugby', name: 'Ceylonese Rugby & Football Club' },
  { src: Gmedi, alt: 'Global Medicare', name: 'Global Medicare & Laboratories' },
  { src: Ema, alt: 'Ema Pharma', name: 'Ema Pharma' },
  { src: NB, alt: 'NB Products', name: 'NB Products' },
  { src: LHC, alt: 'LH Consortium', name: 'LH Consortium' },
  { src: SBD, alt: 'SBD products (Pvt) Ltd ', name: 'SBD products (Pvt) Ltd ' },
  { src: Sasra, alt: 'SAHASRA Entrepreneurial Resources Limited', name: 'SAHASRA Entrepreneurial Resources Limited' },
  { src: Nuwani, alt: 'Nuwani Constructions', name: 'Nuwani Constructions' },
  { src: SA, alt: 'Siyarata Ayurveda', name: 'Siyarata Ayurveda' },
  { src: ST, alt: 'Sethum Products', name: 'Sethum Products' },
  { src: Udayanga, alt: 'Udaya Industries', name: 'Udaya Industries' },
  { src: LS, alt: 'LS Trading', name: 'LS Trading' },
  { src: NF, alt: 'Nourishing Foods', name: 'Nourishing Foods' },
  { src: LCP, alt: 'Lizbury confectioneries (Pvt) Ltd', name: 'Lizbury confectioneries (Pvt) Ltd' },
  { src: KLY, alt: 'Kayak surgi pharma pvt Ltd', name: 'Kayak surgi pharma (Pvt) Ltd' },
  {src: Dis, alt: 'Desir confectionaries', name: 'Desir confectionaries' },
  { src: DTY, alt: 'Dharmasiri Tyres', name: 'Dharmasiri Tyres' },
  { src: DIL, alt: 'Dil Foods Pvt Ltd', name: 'Dil Foods (Pvt) Ltd' },
  
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: 'spring', bounce: 0.3 }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 6px 25px rgba(0, 59, 120, 0.3)",
    transition: { duration: 0.3 }
  },
};

const ClientsWeAreProudOf = () => {
  return (
    <>
      {/* Section with background image and overlay */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-8 md:px-12 lg:px-20 font-sans min-h-screen"
        style={{ backgroundImage: `url(${clientsBg})` }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <div className="text-center mb-14">
            <h1
              aria-hidden="true"
              className="absolute inset-0 flex justify-center items-center text-[7rem] sm:text-[10rem] font-extrabold text-[#003B78] opacity-10 -z-10 leading-none"
            >
              Clients
            </h1>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#003B78] drop-shadow-md relative">
              We Are Proud Of
            </h2>
            <p className="mt-4 text-gray-800 text-base sm:text-lg max-w-2xl mx-auto relative backdrop-blur-md">
              We’ve collaborated with leading businesses across sectors to deliver impactful certification and consultancy solutions.
            </p>
          </div>

          {/* Logo Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow transition-transform border border-gray-200 hover:border-blue-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 sm:h-28 object-contain mb-3"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x100/cccccc/000000?text=Logo+Error";
                  }}
                />
                <p className="text-sm sm:text-base font-semibold text-[#003B78]">{logo.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process outside the section - no background or overlay */}
      <div className="my-1 px-4 sm:px-8 md:px-12 lg:px-20 font-sans">
        
        {/* <Process /> */}
        {/* <Together /> */}
      </div>
    </>
  );
};

export default ClientsWeAreProudOf;
