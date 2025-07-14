import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaChartLine,
  FaAward,
  FaHandshake,
  FaVials,
  FaUserShield,
  FaSyncAlt,
  FaFileAlt,
  FaUserGraduate,
  FaBalanceScale,
} from "react-icons/fa";
import Logo from "../../assets/ISO15189-Logo.webp";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ISO15189Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ width: "100%", maxWidth: "550px" }} // Responsive width max 550px
      key={number}
    >
      <Card
        sx={{
          width: "100%", // full width of container
          height: "auto", // flexible height
          minHeight: 200,
          position: "relative",
          paddingTop: 4,
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
              fontSize: "0.870rem",
              display: "inline-block",
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
              textAlign: "center",
            }}
          >
            Rewards You Will Get After ISO 15189:2022 <br />
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
            alt="ISO 15189:2022 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "90%",
              width: "400px",
              height: "auto",
              borderRadius: "600px",
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
            🔬 Empower your medical laboratory with{" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>ISO
            15189:2022 — delivering reliable results, enhancing quality, and
            building trust in{" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>
            every diagnosis.
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
            gap: "30px", // smaller gap to be consistent with first component
          }}
        >
          {renderCard(
            "Improved Quality of Testing and Services",
            "ISO 15189 ensures that laboratory processes are standardized and follow best practices, leading to more accurate, reliable, and consistent test results.",
            FaVials,
            "01"
          )}
          {renderCard(
            "Regulatory Compliance",
            "Certification helps laboratories meet regulatory requirements and accreditation standards, ensuring compliance with both local and international regulations.",
            FaBalanceScale,
            "02"
          )}
          {renderCard(
            "Enhanced Reputation and Trust",
            "ISO 15189 certification demonstrates a laboratory's commitment to quality and competence, building trust with healthcare providers, patients, and stakeholders.",
            FaAward,
            "03"
          )}
          {renderCard(
            "Improved Patient Safety",
            "By ensuring the accuracy and reliability of test results, ISO 15189 contributes to better patient care and safety, reducing the likelihood of misdiagnoses or incorrect treatments.",
            FaUserShield,
            "04"
          )}
          {renderCard(
            "Consistency and Reliability",
            "The standard ensures consistent practices and processes in laboratories, leading to reliable results across various tests and over time.",
            FaSyncAlt,
            "05"
          )}
          {renderCard(
            "Increased Operational Efficiency",
            "ISO 15189 emphasizes process optimization, waste reduction, and resource management, leading to more efficient laboratory operations and reduced costs.",
            FaChartLine,
            "06"
          )}
          {renderCard(
            "Accurate Documentation and Traceability",
            "The standard requires proper documentation and record-keeping, ensuring that all tests, procedures, and results are traceable for quality control, audits, and legal purposes.",
            FaFileAlt,
            "07"
          )}
          {renderCard(
            "Enhanced Risk Management",
            "ISO 15189 helps identify and manage risks related to laboratory operations, reducing the likelihood of errors, accidents, and non-compliance.",
            FaShieldAlt,
            "08"
          )}
          {renderCard(
            "Employee Competence and Training",
            "The standard requires laboratories to maintain a skilled and competent workforce, promoting ongoing staff training, development, and performance evaluation.",
            FaUserGraduate,
            "09"
          )}
          {renderCard(
            "Improved Customer Confidence",
            "ISO 15189 certification assures customers and stakeholders that the laboratory operates to high-quality standards and consistently delivers accurate results.",
            FaHandshake,
            "10"
          )}
        </Box>

        <br />
        <br />
      </div>
    </div>
  );
};

export default ISO15189Benefits;
