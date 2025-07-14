import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { FaLeaf, FaMoneyBillWave, FaChartLine, FaGlobe, FaAward, FaHandshake, FaLightbulb, FaRecycle } from "react-icons/fa";
import { MdGavel, MdGroups } from "react-icons/md";
import { GiPlantRoots } from "react-icons/gi";
import Logo from '../../assets/ISO14001-Logo.webp';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO14001Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ width: "100%", maxWidth: "550px" }}
    >
      <Card sx={{ width: "100%", height: "auto", minHeight: 200, position: "relative", paddingTop: 4 }}>
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
        className="py-16 max-w-7xl mx-auto text-left"
        style={{ paddingLeft: "5%", paddingRight: "5%" }}
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
            Rewards You Will Get After ISO 14001:2015 <br />
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
            alt="ISO 14001:2015 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "90%",
              width: "400px",
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
            🌿 Strengthen your sustainability journey with ISO 14001:2015 — driving environmental{" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>responsibility, regulatory compliance, and operational excellence for a{" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>
            greener future.
          </p>
          <br />
        </motion.div>

        {/* Cards rows */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
            flexWrap: "wrap",
            gap: "30px"
          }}
        >
          {renderCard(
            "Improved Environmental Performance",
            "Helps organizations reduce their environmental impact through systematic management of environmental aspects like waste, energy consumption, and emissions.",
            FaLeaf,
            "01"
          )}
          {renderCard(
            "Compliance with Regulations",
            "Ensures adherence to environmental laws and regulations, minimizing the risk of legal penalties and compliance issues.",
            MdGavel,
            "02"
          )}
          {renderCard(
            "Cost Savings",
            "Encourages efficient use of resources, reducing waste and energy consumption, which leads to significant cost savings over time.",
            FaMoneyBillWave,
            "03"
          )}
          {renderCard(
            "Risk Management",
            "Helps identify and manage environmental risks, reducing the likelihood of environmental incidents, disruptions, and fines.",
            FaShieldAlt,
            "04"
          )}
          {renderCard(
            "Increased Market Competitiveness",
            "ISO 14001 certification can give a competitive edge by demonstrating environmental responsibility, attracting customers and partners who prioritize sustainability.",
            FaChartLine,
            "05"
          )}
          {renderCard(
            "Access to New Markets",
            "Many industries and customers require ISO 14001 certification as part of their supply chain, opening new business opportunities.",
            FaGlobe,
            "06"
          )}
          {renderCard(
            "Enhanced Brand Image and Reputation",
            "Shows commitment to environmental sustainability, building trust with customers, stakeholders, and the community.",
            FaAward,
            "07"
          )}
          {renderCard(
            "Employee Engagement",
            "Involves employees in environmental initiatives, boosting morale and fostering a sense of responsibility toward sustainability goals.",
            MdGroups,
            "08"
          )}
          {renderCard(
            "Stakeholder Confidence",
            "Builds trust with investors, customers, and regulators, showing that the organization is managing its environmental impact responsibly.",
            FaHandshake,
            "09"
          )}
          {renderCard(
            "Improved Decision-Making",
            "Facilitates data-driven decisions by assessing environmental impacts, ensuring better resource allocation and long-term planning.",
            FaLightbulb,
            "10"
          )}
          {renderCard(
            "Sustainable Growth",
            "Supports long-term business sustainability by integrating environmental management into core business operations and strategy.",
            GiPlantRoots,
            "11"
          )}
          {renderCard(
            "Better Resource Management",
            "Encourages efficient use of resources, such as energy, water, and raw materials, contributing to sustainability and reducing operational costs.",
            FaRecycle,
            "12"
          )}
        </Box>

        <br />
        <br />
      </div>
    </div>
  );
};

export default ISO14001Benefits;
