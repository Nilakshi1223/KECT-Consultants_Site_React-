import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Logo from '../../assets/ISO45001-Logo.webp';
import {
  FaHeartbeat,
  FaBalanceScale,
  FaExclamationTriangle,
  FaSmile,
  FaMoneyBillWave,
  FaCertificate,
  FaShieldAlt,
} from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO45001Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <Box
      key={number}
      component={motion.div}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      sx={{
        flex: { xs: "1 1 100%", sm: "1 1 45%" },  // responsive flex-basis: full width on xs, 45% on sm+
        maxWidth: { xs: "100%", sm: "45%" },
        boxSizing: "border-box",
        mb: 3,
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: { xs: "auto", sm: 275 },
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
            Rewards You Will Get After ISO 45001 <br />
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
           Protect lives and promote workplace well-being with ISO 45001:2018 — the international standard that helps organizations create safer working environments, manage health and safety risks, and build a culture of care and resilience across all levels.
          </p>
          <br />
        </motion.div>

        {/* Container for cards */}
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
            "Improved Employee Health and Safety",
            "ISO 45001 helps organizations identify, assess, and control risks related to employee health and safety, thereby reducing accidents, injuries, and occupational diseases.",
            FaHeartbeat,
            "01"
          )}
          {renderCard(
            "Regulatory Compliance",
            "Achieving ISO 45001 certification ensures compliance with local, national, and international health and safety regulations, helping organizations avoid fines, penalties, and legal liabilities.",
            FaBalanceScale,
            "02"
          )}
          {renderCard(
            "Reduced Workplace Incidents",
            "By proactively identifying hazards and implementing controls, ISO 45001 helps prevent accidents and incidents, leading to a safer work environment and fewer workplace injuries.",
            FaExclamationTriangle,
            "03"
          )}
          {renderCard(
            "Improved Employee Morale and Engagement",
            "A safer work environment increases employee satisfaction and well-being, fostering a positive organizational culture. Employees are more likely to be engaged and productive when they feel their health and safety is prioritized.",
            FaSmile,
            "04"
          )}
          {renderCard(
            "Reduced Costs",
            "Fewer workplace accidents and incidents lead to reduced medical expenses, insurance premiums, compensation claims, and legal costs, ultimately saving the organization money.",
            FaMoneyBillWave,
            "05"
          )}
          {renderCard(
            "Enhanced Reputation",
            "ISO 45001 certification demonstrates the organization's commitment to health and safety, improving its reputation with customers, stakeholders, and potential employees.",
            FaCertificate,
            "06"
          )}
          {renderCard(
            "Improved Risk Management",
            "The standard provides a systematic approach to identifying, assessing, and managing risks, reducing the likelihood of accidents and improving overall risk management in the workplace.",
            FaShieldAlt,
            "07"
          )}
        </Box>

        <br />
        <br />
      </div>
    </div>
  );
};

export default ISO45001Benefits;
