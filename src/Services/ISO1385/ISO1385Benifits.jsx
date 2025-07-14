import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";
import { FaBan } from "react-icons/fa";
import { MdAutorenew } from "react-icons/md";
import { MdSpeed } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdForum } from "react-icons/md";

import Logo from '../../assets/ISO13485-Logo.webp';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO1385Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ flex: '1 1 300px', maxWidth: 550, boxSizing: 'border-box' }}
    >
      <Card
        sx={{
          width: '100%',
          height: {
          xs: 'auto',    // for small screens height auto
          sm: 250       // for larger screens fixed height 250px
    },
          position: "relative",
          paddingTop: 4,
          boxSizing: 'border-box'
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
              fontSize: "0.870rem",
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
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
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
            Rewards You Will Get After ISO 13485:2016 <br />
            Certification
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto",
              marginBottom: "50px"
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
            alt="ISO 9001:2015 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
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
            Empower your medical device business with <br></br>ISO 13485:2016 — ensuring safety, quality, and regulatory confidence at every stage of the product<br></br>
         
            lifecycle.
          </p>
          <br />
        </motion.div>

        {/* Cards rows */}
        {[0, 1, 2, 3, 4].map((rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 5,
              flexWrap: "wrap",
              gap: "50px"
            }}
          >
            {(() => {
              const cardsPerRow = 2;
              const startIndex = rowIndex * cardsPerRow;
              const cards = [
                {
                  title: " Regulatory Compliance",
                  description: " ISO 13485 helps medical device manufacturers comply with regulatory requirements in diferent regions, such as the FDA (Food and Drug Administration) in the U.S. or the European Medicines Agency (EMA) in Europe.",
                  IconComponent: MdVerifiedUser,
                  number: "01"
                },
                {
                  title: "Improved Product Safety and Quality",
                  description: " By implementing ISO 13485, manufacturers can establish systematic processes to ensure the safety and quality of their medical devices. ",
                  IconComponent: FaShieldAlt,
                  number: "02"
                },
                {
                  title: " Enhanced Customer Confidence",
                  description: "ISO 13485 certification provides assurance to customers, healthcare providers, and patients that the medical devices are produced in a controlled and consistent manner, meeting stringent quality and regulatory standards. ",
                  IconComponent: MdThumbUp,
                  number: "03"
                },
                {
                  title: " Reduced Risk of Recalls",
                  description: " ISO 13485 requires manufacturers to establish robust processes for design, production, and post-market surveillance, which can significantly reduce the likelihood of product defects or safety issues that could lead to costly product recalls.",
                  IconComponent: FaBan,
                  number: "04"
                },
                {
                  title: "Better Risk Management",
                  description: " ISO 13485 includes specific requirements for risk management throughout the lifecycle of a medical device, from design to post-market. This helps identify, assess, and mitigate potential risks to patient safety, ensuring that the devices are both safe and efective.",
                  IconComponent: FaShieldAlt,
                  number: "05"
                },
                {
                  title: " Continuous Improvement",
                  description: " ISO 13485 promotes a culture of continuous improvement by encouraging organizations to monitor, measure, and improve their processes.",
                  IconComponent: MdAutorenew,
                  number: "06"
                },
                {
                  title: "Improved Operational Efficiency",
                  description: " The standard emphasizes the importance of well-defined processes, clear documentation, and risk management.",
                  IconComponent: MdSpeed,
                  number: "07"
                },
                {
                  title: "Supply Chain Management",
                  description: "ISO 13485 requires manufacturers to establish control over their supply chain to ensure the quality of materials and components. ",
                  IconComponent: MdLocalShipping,
                  number: "08"
                },
                {
                  title: "Global Market Access",
                  description: " ISO 13485 is recognized internationally, and certification can help medical device manufacturers enter new markets.",
                  IconComponent: FaGlobeAmericas,
                  number: "09"
                },
                {
                  title: "Clear Documentation and Traceability",
                  description: " ISO 13485 emphasizes the importance of detailed documentation and traceability, ensuring that all aspects of product design, development, and manufacturing are well-documented.",
                  IconComponent: MdDescription,
                  number: "10"
                },
                {
                  title: " Employee Involvement and Accountability",
                  description: "  ISO 13485 encourages organizations to involve employees in maintaining quality standards and encourages accountability at all levels. This can lead to higher engagement, better morale, and a culture of quality within the company.",
                  IconComponent: FaUsersCog,
                  number: "11"
                },
                {
                  title: "Improved Internal Communication",
                  description: " The QMS structure outlined in ISO 13485 encourages clear communication across departments, improving coordination between design, production, quality control, and regulatory teams.",
                  IconComponent: MdForum,
                  number: "12"
                }
              ];

              return (
                <>
                  {cards.slice(startIndex, startIndex + cardsPerRow).map(({ title, description, IconComponent, number }) =>
                    renderCard(title, description, IconComponent, number)
                  )}
                </>
              );
            })()}
          </Box>
        ))}

        <br />
        <br />
      </div>
    </div>
  );
};

export default ISO1385Benefits;
