import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Logo from '../../assets/ISO22000-Logo.webp';
import { FaCheckCircle, FaShieldAlt, FaSyncAlt, FaCogs, FaBalanceScale, FaTrophy, FaGlobe } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO22000Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <motion.div
      key={number}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card
        sx={{
          width: "100%",          // full width of grid cell
          maxWidth: 550,          // max width so card doesn't get too wide on large screens
          height: { xs: "auto", sm: 250 },
          position: "relative",
          paddingTop: 4,
          boxSizing: "border-box",
          mb: 3,
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
  );

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#F0F3FA",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        boxSizing: "border-box",
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
              textAlign: "center",
            }}
          >
            Rewards You Will Get After ISO 22000 : 2018 <br />
            Certification
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto",
              marginBottom: "50px",
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
            alt="ISO 22000:2018 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              height: "auto",
              borderRadius: "200px",
            }}
            whileHover={{
              opacity: 1,
              scale: 1.05,
            }}
            initial={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          />
          <br />
          <p
            className="mt-4 font-[Helvetica] text-center"
            style={{ fontSize: "1.2rem", color: "#5A5A5A" }}
          >
            Strengthen food safety and consumer confidence with ISO 22000:2018 — the global standard that{" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>empowers food businesses to manage hazards, ensure safe processes, and deliver quality from
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>farm to fork.
          </p>
          <br />
        </motion.div>

        {/* Cards container with responsive 2-columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: { xs: "20px", sm: "40px", md: "50px" },
            justifyContent: "center",
            mt: 5,
          }}
        >
          {renderCard(
            "Improved Food Safety",
            "FSSC 22000 helps organizations identify and manage food safety hazards more effectively, reducing the risk of contamination and ensuring the safety of food products from production to consumption.",
            FaCheckCircle,
            "01"
          )}
          {renderCard(
            "Global Market Access",
            "FSSC 22000 certification is recognized worldwide, facilitating trade and market access across borders. It allows organizations to demonstrate their commitment to food safety to customers, regulators, and stakeholders globally.",
            FaGlobe,
            "02"
          )}
          {renderCard(
            "Regulatory Compliance",
            "Achieving FSSC 22000 certification helps organizations comply with food safety laws and regulations in different countries, minimizing the risk of regulatory violations, penalties, and recalls.",
            FaBalanceScale,
            "03"
          )}
          {renderCard(
            "Enhanced Consumer Confidence",
            "FSSC 22000 provides assurance to consumers that the food they purchase is safe, which can enhance a company’s reputation, improve brand trust, and increase consumer loyalty.",
            FaThumbsUp,
            "04"
          )}
          {renderCard(
            "Continual Improvement",
            "FSSC 22000 promotes a culture of continual improvement, ensuring that food safety management systems evolve and adapt to new risks, technologies, and regulatory changes.",
            FaSyncAlt,
            "05"
          )}
          {renderCard(
            "Improved Operational Efficiency",
            "The FSSC 22000 framework encourages organizations to streamline processes, reduce waste, and minimize inefficiencies, leading to cost savings and improved operational performance.",
            FaCogs,
            "06"
          )}
          {renderCard(
            "Better Risk Management",
            "The certification promotes a proactive approach to risk management, helping organizations identify and mitigate food safety risks before they result in product failures or recalls.",
            FaShieldAlt,
            "07"
          )}
          {renderCard(
            "Competitive Advantage",
            "Certification to FSSC 22000 can provide a competitive edge in the marketplace, as customers and business partners are increasingly prioritizing food safety and quality when selecting suppliers.",
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

export default ISO22000Benefits;
