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
  FaSmileBeam,
  FaTrophy,
  FaChartLine,
  FaStar,
  FaUsers,
  FaUserCheck,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";
import Logo from "../../assets/ISO18404-Logo.webp";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ISO18404Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <motion.div
      key={number}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ width: "100%" }}
    >
      <Card
        sx={{
          width: "100%",
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
            Rewards You Will Get After 18404:2015 <br />
            Certification
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
            alt="ISO 18404:2015 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              width: "100%",
              height: "auto",
              borderRadius: "180px",
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
            Achieve operational excellence with ISO 18404:2015 — showcasing your
            competence in Lean, Six Sigma,{" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>and Lean
            Six Sigma to drive quality, process improvement, and{" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>global
            performance.
          </p>
          <br />
        </motion.div>

        {/* Cards rows */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            justifyContent: "center",
            mt: 5,
            gap: { xs: "20px", sm: "40px", md: "50px" },
          }}
        >
          {renderCard(
            "Standardization of Best Practices",
            "ISO 18404 provides a globally recognized framework for Lean and Six Sigma methodologies, ensuring that organizations adopt standardized processes and practices, which can lead to improved consistency and efficiency.",
            FaCheckCircle,
            "01"
          )}
          {renderCard(
            "Enhanced Process Efficiency",
            "Organizations can streamline processes, reduce waste, and improve productivity, driving operational excellence through structured Lean Six Sigma principles.",
            FaChartLine,
            "02"
          )}
          {renderCard(
            "Customer Satisfaction and Trust",
            "By improving product and service quality, ISO 18404 helps build customer confidence, satisfaction, and loyalty.",
            FaSmileBeam,
            "03"
          )}
          {renderCard(
            "Global Recognition",
            "Achieving ISO 18404 certification boosts international credibility, opening doors to new markets and partnerships.",
            FaGlobe,
            "04"
          )}
          {renderCard(
            "Employee Empowerment",
            "ISO 18404 fosters a culture of continuous improvement, engaging and empowering employees to contribute effectively.",
            FaUsers,
            "05"
          )}
          {renderCard(
            "Sustainable Improvements",
            "Supports long-term sustainability by embedding a mindset of quality and efficiency in organizational processes.",
            FaRecycle,
            "06"
          )}
        </Box>
      </div>
    </div>
  );
};

export default ISO18404Benefits;
