import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PresidentImage from "../assets/images-Pica.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const zoomImage = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const bgHeadingVariants = {
  animate: {
    opacity: [0.05, 0.1, 0.05],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const LetterFromPresidentSection = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate("/team");
  };

  return (
    <section className="relative bg-white py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-24 font-sans overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Background Heading */}
<div className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none text-center w-full -z-10">
  <motion.h1
    className="text-[clamp(2.5rem,10vw,6rem)] sm:text-[clamp(3rem,12vw,9rem)] font-extrabold text-[#003B78] opacity-5 uppercase leading-none"
    variants={bgHeadingVariants}
    animate="animate"
    aria-hidden="true"
  >
    CHAIRMAN’S
  </motion.h1>
  <motion.h1
    className="text-[clamp(2.2rem,9vw,5.5rem)] sm:text-[clamp(2.8rem,11vw,8rem)] font-extrabold text-[#003B78] opacity-80 uppercase leading-none mt-2 sm:-mt-10"
    variants={bgHeadingVariants}
    animate="animate"
    aria-hidden="true"
    style={{ animationDirection: "reverse" }}
  >
    PROFILE
  </motion.h1>
</div>


        {/* Title Section */}
        <motion.div
          className="text-center mb-20 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#003B78] to-blue-600 drop-shadow-xl relative z-10">
            Chairman’s Profile
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mt-4 max-w-2xl mx-auto px-2 relative z-10">
            Meet the visionary behind KECT Group of Companies.
          </p>
        </motion.div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
          {/* Image with Glow */}
          <motion.div
            className="relative rounded-3xl overflow-hidden max-w-xs sm:max-w-md mx-auto shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomImage}
          >
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl blur-2xl opacity-50 animate-pulse z-0" />
            <img
              src={PresidentImage}
              alt="Chairman - Mr. Vinod Kumar Khandelwal"
              className="relative z-10 rounded-3xl w-full h-auto object-cover"
              loading="lazy"
              draggable={false}
            />
          </motion.div>

          {/* Description Content */}
          <div className="space-y-6 text-left px-4 sm:px-0 max-w-xl mx-auto lg:mx-0">
            <motion.h3
              className="text-3xl sm:text-4xl font-bold text-[#003B78]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="block uppercase text-sm tracking-widest text-blue-400 mb-2 font-semibold">
                Chairman
              </span>
              Mr. Vinod Kumar Khandelwal
            </motion.h3>

            <motion.p
              className="text-gray-800 text-lg leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Mr. Vinod Kumar Khandelwal is a respected leader and the founder of KECT Group of Companies. 
              Born in Mumbai in 1941, he studied Mathematics and earned his MBA from the Bajaj Institute 
              of Management in India. He began his global career in the United States in 1962 and has worked 
              across India, the Middle East, and Sri Lanka for over 40 years.

              He has led many major projects, including the tallest residential building in Asia and key 
              infrastructure in the Gulf. From 1976 to 1980, he managed international projects in Bahrain, 
              Iraq, Kuwait, Saudi Arabia, and the UAE.

              In Sri Lanka, he partnered with companies like Bartleet and Maharaja Organization, 
              helped build the World Trade Center in Colombo, and started CSR projects for elderly care and 
              children’s education.

              Mr. Khandelwal continues to lead KECT Group with a strong focus on quality, innovation, 
              and ethical values.
            </motion.p>

            {/* Button */}
            <motion.div
              className="pt-8"
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <button
                onClick={handleViewMoreClick}
                className="inline-flex items-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-[#003B78] to-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                aria-label="View more leaders"
              >
                View More Leaders <ChevronRight size={22} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterFromPresidentSection;
