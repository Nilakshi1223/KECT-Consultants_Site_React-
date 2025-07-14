import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Logo from '../../assets/ISO27001-Logo.webp';
import {
  FaCheckCircle,
  FaShieldAlt,
  FaSyncAlt,
  FaBalanceScale,
  FaHandshake,
  FaTrophy,
  FaBolt,
  FaLock
} from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";
import { useMediaQuery } from "@mui/material";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO27001Benefits = () => {
const renderCard = (title, description, IconComponent, number) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <motion.div
      key={number}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        flex: isSmallScreen ? "1 1 100%" : "1 1 45%",    // 1 card per row if small screen, else 2 cards
        maxWidth: isSmallScreen ? "100%" : "45%",
        boxSizing: "border-box",
      }}
    >
      <Card
        sx={{
          width: "100%", // full width inside flex item
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
};

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
            Rewards You Will Get After ISO/IEC 27001 <br />
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
            alt="ISO/IEC 27001 Logo"
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
            Strengthen data protection and resilience with ISO 27001:2022 — the international standard that helps organizations implement effective information security controls to safeguard sensitive data, manage risks,
            <br />
            and ensure trust in a connected world.
          </p>
          <br />
        </motion.div>

        {/* Container for cards - flex container */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: { xs: "20px", sm: "30px", md: "40px" },
            mt: 5,
          }}
        >
          {renderCard(
            "Improved Information Security",
            "ISO 27001 helps organizations identify, manage, and reduce information security risks by implementing comprehensive security controls and processes to protect sensitive data.",
            FaCheckCircle,
            "01"
          )}
          {renderCard(
            "Increased Trust and Reputation",
            "Achieving ISO 27001 certification demonstrates an organization’s commitment to information security, which can build trust with customers, partners, and stakeholders, enhancing its reputation.",
            FaHandshake,
            "02"
          )}
          {renderCard(
            "Regulatory Compliance",
            "ISO 27001 assists organizations in complying with legal, regulatory, and contractual requirements regarding information security, ensuring that they meet the necessary obligations and avoid fines or penalties.",
            FaBalanceScale,
            "03"
          )}
          {renderCard(
            "Enhanced Customer Confidence",
            "Customers are more likely to trust an organization with their personal and sensitive data if it is ISO 27001 certified, leading to stronger relationships and higher customer retention rates.",
            FaThumbsUp,
            "04"
          )}
          {renderCard(
            "Protection from Cyber Threats",
            "The framework helps defend against a wide range of cyber threats, such as data breaches, hacking, and phishing attacks, by implementing strong information security policies and procedures.",
            FaShieldAlt,
            "05"
          )}
          {renderCard(
            "Business Continuity",
            "ISO 27001 helps organizations develop and maintain business continuity plans to ensure that critical information remains protected and accessible during incidents, minimizing disruptions and downtime.",
            FaSyncAlt,
            "06"
          )}
          {renderCard(
            "Risk Management",
            "ISO 27001 provides a systematic approach to risk assessment and management, helping organizations identify vulnerabilities, threats, and risks to their information systems, and implement appropriate controls to mitigate them.",
            FaShieldAlt,
            "07"
          )}
          {renderCard(
            "Competitive Advantage",
            "Certification differentiates organizations from competitors by showcasing a commitment to best practices in information security, attracting more customers, and gaining business opportunities in markets that require high standards of security.",
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

export default ISO27001Benefits;
