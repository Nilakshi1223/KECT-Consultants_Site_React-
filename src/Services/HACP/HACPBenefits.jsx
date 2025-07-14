import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Logo from '../../assets/HACP-Logo.webp';
import { FaShieldAlt, FaCogs, FaClock, FaBullseye, FaBalanceScale, FaGavel, FaTrophy, FaGlobe } from "react-icons/fa";
import processGif from '../../assets/telephone.gif';
import DealGif from '../../assets/deal.gif';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const HACPBenefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
   <motion.div
  key={number}
  variants={fadeUpVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  style={{
    boxSizing: "border-box",
    marginBottom: 24,
  }}
  // Use sx for responsive styling
  sx={{
    flex: {
      xs: "1 1 100%",     // Full width on small screens
      md: "1 1 calc(45% - 20px)" // ~45% width on md+
    },
    maxWidth: {
      xs: "100%",
      md: "calc(45% - 20px)"
    }
  }}
>
      <Card
        sx={{
          width: "100%", // full width of flex item
          height: { xs: "auto", sm: 250 },
          position: "relative",
          paddingTop: 4,
          boxSizing: "border-box"
        }}
      >
        <CardContent sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: 2,
              left: 20,
              width: 48,
              height: 48,
              bgcolor: "rgb(185, 228, 248)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgb(25, 118, 210)",
              fontSize: "1.8rem"
            }}
          >
            <IconComponent />
          </Box>

          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: 5,
              right: 30,
              bgcolor: "rgb(185, 228, 248)",
              color: "rgb(139, 142, 143)",
              px: 1,
              py: 0.5,
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "0.87rem",
              display: "inline-block",
              minWidth: "28px",
              textAlign: "center"
            }}
          >
            {number}
          </Typography>

          <br />

          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", mt: 5, mb: 0.5, color: "rgb(34, 65, 65)" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#F0F3FA",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        boxSizing: "border-box"
      }}
    >
      <div
        className="py-16 max-w-5xl mx-auto text-left"
        style={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "rgb(14, 43, 68)",
              mt: 8,
              textAlign: "center"
            }}
          >
            Rewards You Will Get After HACCP  <br />
            Certification
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto 50px auto"
            }}
          />
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src={Logo}
            alt="ISO 22716 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              width: "100%",
              height: "auto",
              borderRadius: "200px"
            }}
            whileHover={{
              opacity: 1,
              scale: 1.05
            }}
            initial={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8
            }}
          />
          <br />
          <p
            className="mt-4 font-[Helvetica] text-center"
            style={{ fontSize: "1.2rem", color: "#5A5A5A" }}
          >
            Protect consumer health and ensure food safety with HACCP — the internationally recognized system that helps organizations identify, evaluate, and control food safety hazards through proactive risk management and rigorous process controls.
          </p>
          <br />
        </motion.div>

        {/* Cards container */}
  <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    mt: 5,
  }}
>
  {renderCard(
    "Demonstrated Commitment to Food Safety",
    "HACCP shows customers and the community that food safety is a top priority, with control systems in place to prevent hazards and protect consumers.",
    FaShieldAlt, // Shield icon for protection
    "01"
  )}
  {renderCard(
    "More Effective Use of Resources",
    "By applying HACCP, businesses can better allocate resources, reduce waste, and save costs through efficient management of food safety risks.",
    FaCogs, // Cogs icon for efficiency
    "02"
  )}
  {renderCard(
    "Timely Response to Food Safety Issues",
    "HACCP helps organizations identify potential problems early and respond quickly to prevent food safety incidents and protect public health.",
    FaClock, // Clock icon for timely response
    "03"
  )}
  {renderCard(
    "Preventive Approach",
    "HACCP focuses on identifying and preventing food safety hazards before they occur, rather than reacting to issues after they happen.",
    FaBullseye, // Bullseye icon for preventive focus
    "04"
  )}
  {renderCard(
    "Legal and Regulatory Compliance",
    "In many regions, a certified HACCP system is required by law. Implementing HACCP helps meet legal obligations and regulatory requirements.",
    FaBalanceScale, // Scale icon for compliance
    "05"
  )}
  {renderCard(
    "Protection of Brand and Reputation",
    "HACCP provides a basis of due diligence in legal matters and helps safeguard your brand from damage caused by food safety incidents.",
    FaGavel, // Gavel icon for legal protection
    "06"
  )}
  {renderCard(
    "Increased Business Opportunities",
    "HACCP certification can help attract more customers and open up new markets by demonstrating a commitment to food safety.",
    FaTrophy, // Trophy icon for advantage
    "07"
  )}
  {renderCard(
    "Support for International Trade",
    "Compliance with Codex Alimentarius standards under HACCP facilitates international trade and access to global markets.",
    FaGlobe, // Globe icon for global trade
    "08"
  )}
</Box>



        
      </div>

<div className="w-full max-w-9xl mx-auto p-6 rounded-lg">
  {/* Top row: process icon + heading + deal icon + call button */}
  <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-center sm:justify-start text-center sm:text-left">

    {/* Process Icon */}
    <img src={processGif} alt="process icon" className="w-20 sm:w-24 h-20 sm:h-24" />

    {/* Heading + Deal icon + Call button (horizontally aligned) */}
    <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-center sm:justify-start text-center sm:text-left">

      {/* Heading text */}
     <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
  Simplifying HACCP: We Guide,
  <span className="text-blue-700 font-bold"> You Get Certified!</span>
</p>

      {/* Deal Icon right after heading */}
      <img src={DealGif} alt="deal icon" className="w-20 sm:w-24 h-20 sm:h-24" />

      {/* Call Now button next to deal icon */}
   <a
  href="tel:+94769780984"
  className="inline-flex items-center gap-2 px-6 sm:px-9 py-3 sm:py-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-400 transition text-lg sm:text-2xl whitespace-nowrap"
>
  📞 Call Now +94769780984 
</a>
    </div>
  </div>

  {/* Paragraph below the heading with left margin matching the heading start */}
  <div className="max-w-xl ml-4 sm:ml-[5.5rem] mt-4 text-left">
    <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-semibold">
      Getting HACCP certified is easy with us! From consultation to successful certification, we ensure food safety compliance, clarity, and confidence every step of the way.
    </p>
  </div>
</div>



      
    </div>
  );
};

export default HACPBenefits;
