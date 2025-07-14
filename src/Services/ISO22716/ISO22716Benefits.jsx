import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Logo from '../../assets/ISO22716-Logo.webp';
import { FaShieldAlt, FaCertificate, FaBalanceScale, FaTrophy, FaTruck, FaHandshake, FaMoneyBillWave, FaGlobe } from "react-icons/fa";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO22716Benefits = () => {
const renderCard = (title, description, IconComponent, number) => (
  <Box
    key={number}
    sx={{
      flex: {
        xs: "1 1 100%",       // full width on xs/sm
        md: "1 1 calc(50% - 20px)" // 50% width on md+
      },
      maxWidth: {
        xs: "100%",
        md: "calc(50% - 20px)"
      },
      boxSizing: "border-box",
      marginBottom: 3, // 24px ~ 3 spacing units in MUI
    }}
  >
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ width: "100%" }} // fill Box width
    >
      <Card
        sx={{
          width: "100%",
          height: { xs: "auto", sm: 250 },
          position: "relative",
          paddingTop: 4,
          boxSizing: "border-box",
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
              fontSize: "1.8rem",
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
              textAlign: "center",
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
  </Box>
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
            Rewards You Will Get After ISO 22716 <br />
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
            Enhance cosmetic safety and quality with ISO 22716 — the international guideline <br />
            that helps manufacturers apply Good Manufacturing Practices to ensure consistent, safe, and high-standard <br />
            products for consumers.
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
            "Product Safety and Quality",
            "By following ISO 22716, cosmetic manufacturers ensure that their products are safe for use and meet high-quality standards, reducing the risk of consumer complaints and regulatory issues.",
            FaCertificate,
            "01"
          )}
          {renderCard(
            "Risk Management",
            "The standard helps identify and manage risks related to product safety, contamination, and production errors, reducing the potential for costly recalls or legal liabilities.",
            FaShieldAlt,
            "02"
          )}
          {renderCard(
            "Increased Market Access",
            "ISO 22716 certification can enhance a company's reputation and provide a competitive advantage, opening up new markets and opportunities for global expansion.",
            FaGlobe,
            "03"
          )}
          {renderCard(
            "Improved Consumer Confidence",
            "Certification to ISO 22716 demonstrates that a company is committed to producing safe, high-quality cosmetic products, which helps build trust and loyalty with consumers.",
            FaHandshake,
            "04"
          )}
          {renderCard(
            "Improved Supply Chain Management",
            "By ensuring that raw materials and suppliers meet quality standards, ISO 22716 helps improve the overall integrity and reliability of the supply chain.",
            FaTruck,
            "05"
          )}
          {renderCard(
            "Regulatory Compliance",
            "Compliance with ISO 22716 helps organizations meet the requirements of regulatory bodies such as the European Union Cosmetics Regulation and other global regulations, ensuring that their products can be sold internationally.",
            FaBalanceScale,
            "06"
          )}
          {renderCard(
            "Cost Efficiency",
            "Implementing ISO 22716 can lead to greater operational efficiency by streamlining processes, improving product quality, and reducing waste and rework, which can lower production costs.",
            FaMoneyBillWave,
            "07"
          )}
          {renderCard(
            "Traceability",
            "The standard’s emphasis on documentation and traceability ensures that manufacturers can track and verify all stages of production, improving transparency and accountability.",
            FaTrophy,
            "08"
          )}
        </Box>

        <br />
        <br />
      </div>
    </div>
  );
};

export default ISO22716Benefits;
