import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaThumbsUp,
  FaStar,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaBalanceScale,
  FaSyncAlt,
  FaHandshake,
  FaCogs
} from "react-icons/fa";
import Logo from "../../assets/ISO9001-Logo.webp";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO9001Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <Box
      key={number}
      sx={{
        flexBasis: { xs: "100%", sm: "50%", md: "35%" },
        maxWidth: { xs: "100%", sm: "50%", md: "35%" },
        paddingX: 1,
        boxSizing: "border-box",
        mb: 3,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ width: "100%" }}
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
                top: { xs: 4, sm: 2 },
                left: { xs: 16, sm: 20 },
                width: { xs: 40, sm: 48 },
                height: { xs: 40, sm: 48 },
                bgcolor: "rgb(185, 228, 248)",
                borderRadius: "12px",
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                color: "rgb(25, 118, 210)",
                fontSize: { xs: "1.4rem", sm: "1.8rem" },
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
              sx={{
                fontWeight: "bold",
                mt: 5,
                mb: 0.5,
                color: "rgb(34, 65, 65)",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
              }}
            >
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
        boxSizing: "border-box",
      }}
    >
      <div
        className="py-16 max-w-7xl mx-auto text-left"
        style={{ paddingLeft: "16px", paddingRight: "16px" }}
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
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.4rem" },
            }}
          >
            Rewards You Will Get After ISO 9001:2015 <br />
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
            alt="ISO 9001:2015 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              width: "50%",
              height: "auto",
                borderRadius: "400px"
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
            style={{
              fontSize: "1rem",
              color: "#5A5A5A",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Discover the transformative benefits that ISO 9001:2015 certification brings to your organization.
          </p>
          <br />
        </motion.div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mt: 5,
          }}
        >
          {renderCard(
            "Improved Product and Service Quality",
            "ISO 9001 helps organizations implement consistent processes, leading to higher quality products and services.",
            FaStar,
            "01"
          )}
          {renderCard(
            "Enhanced Customer Satisfaction",
            "Focusing on customer needs and continuous improvement boosts satisfaction.",
            FaThumbsUp,
            "02"
          )}
          {renderCard(
            "Increased Efficiency and Reduced Costs",
            "ISO 9001 promotes streamlined operations, cutting waste and costs.",
            FaCogs,
            "03"
          )}
          {renderCard(
            "Improved Decision-Making",
            "Encourages data-driven, evidence-based decisions.",
            FaChartLine,
            "04"
          )}
          {renderCard(
            "Better Risk Management",
            "Proactively identify and address risks in operations.",
            FaShieldAlt,
            "05"
          )}
          {renderCard(
            "Stronger Customer & Stakeholder Relationships",
            "Continuous improvement strengthens trust and loyalty.",
            FaHandshake,
            "06"
          )}
          {renderCard(
            "Global Market Recognition",
            "ISO 9001 certification enhances credibility internationally.",
            FaGlobe,
            "07"
          )}
          {renderCard(
            "Employee Engagement and Responsibility",
            "Clear roles and better communication boost morale and involvement.",
            FaUsers,
            "08"
          )}
          {renderCard(
            "Legal and Regulatory Compliance",
            "Helps meet legal and regulatory requirements effectively.",
            FaBalanceScale,
            "09"
          )}
          {renderCard(
            "Culture of Continuous Improvement",
            "Encourages ongoing review and refinement of processes.",
            FaSyncAlt,
            "10"
          )}
        </Box>
      </div>
    </div>
  );
};

export default ISO9001Benefits;
