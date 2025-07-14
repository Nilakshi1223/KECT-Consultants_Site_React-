import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaRecycle,
  FaHandshake,
  FaTrophy,
  FaCogs
} from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";
import Logo from "../../assets/ISO15378-Logo.webp";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO15378Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <motion.div
      key={number}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ width: "100%", maxWidth: "550px" }}
    >
      <Card
        sx={{
          width: "100%",
          minHeight: 250,
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
              minWidth: "28px",
              textAlign: "center",
            }}
          >
            {number}
          </Typography>

          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              mt: 5,
              mb: 0.5,
              color: "rgb(34, 65, 65)",
              fontSize: { xs: "1rem", sm: "1.2rem" },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.85rem", sm: "1rem" },
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div
      style={{
        backgroundColor: "#F0F3FA",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          paddingTop: "64px",
          paddingBottom: "64px",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
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
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            Rewards You Will Get After ISO 15378:2017 Certification
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto 50px auto",
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
            alt="ISO 15378:2017 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              width: "50%",
              height: "auto",
              borderRadius: "180px",
            }}
            whileHover={{
              opacity: 1,
              scale: 1.05,
            }}
            transition={{
              duration: 0.8,
            }}
          />
          <p
            style={{
              fontSize: "1rem",
              color: "#5A5A5A",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            📦 Ensure quality and safety with ISO 15378:2017 — the global standard for packaging materials for medicinal products.
          </p>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            mt: 5,
          }}
        >
          {renderCard(
            "Regulatory Compliance",
            "Ensures adherence to international regulations for pharmaceutical packaging materials.",
            FaShieldAlt,
            "01"
          )}
          {renderCard(
            "Improved Product Quality",
            "Enhances consistency and quality of packaging materials, reducing defects.",
            FaCheckCircle,
            "02"
          )}
          {renderCard(
            "Environmental Sustainability",
            "Promotes use of eco-friendly materials and processes in packaging.",
            FaRecycle,
            "03"
          )}
          {renderCard(
            "Stronger Customer Confidence",
            "Builds trust with customers through certified packaging safety.",
            FaHandshake,
            "04"
          )}
          {renderCard(
            "Market Competitiveness",
            "Helps gain a competitive edge in the pharmaceutical supply chain.",
            FaTrophy,
            "05"
          )}
          {renderCard(
            "Process Efficiency",
            "Encourages continuous improvement and leaner packaging operations.",
            FaCogs,
            "06"
          )}
          {renderCard(
            "Global Recognition",
            "Facilitates access to international markets and partners.",
            FcGlobe,
            "07"
          )}
        </Box>
      </div>
    </div>
  );
};

export default ISO15378Benefits;
