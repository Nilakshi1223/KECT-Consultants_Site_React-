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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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
        flex: { xs: "1 1 100%", sm: "1 1 45%" },
        maxWidth: { xs: "100%", sm: "45%" },
        boxSizing: "border-box",
        mb: 3,
      }}
    >
      <Box
        component={motion.div}
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{ rest: {}, hover: {} }}
        sx={{ position: "relative", width: "100%", height: { xs: "auto", sm: 275 } }}
      >
        <Card
          component={motion.div}
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            paddingTop: 4,
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* Blue quarter overlay */}
          <Box
            component={motion.div}
            variants={{
              rest: { width: "60px", height: "60px", top: 0, right: 0 },
              hover: { width: "100%", height: "100%", top: 0, right: 0 },
            }}
            transition={{ duration: 0.5 }}
            sx={{
              position: "absolute",
              backgroundColor: "rgba(25, 118, 210, 0.95)",
              zIndex: 1,
              borderBottomLeftRadius: "80px",
            }}
          />

          <CardContent
            sx={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              color: "inherit",
            }}
          >
            {/* Icon */}
            <Box
              component={motion.div}
              variants={{
                rest: {
                  color: "rgb(25, 118, 210)",
                  backgroundColor: "rgb(185, 228, 248)",
                },
                hover: {
                  color: "#FFD700",
                  backgroundColor: "rgb(4, 19, 145)",
                },
              }}
              transition={{ duration: 0.4 }}
              sx={{
                position: "absolute",
                top: 2,
                left: 20,
                width: 48,
                height: 48,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                zIndex: 2,
              }}
            >
              <IconComponent />
            </Box>

            {/* Number Badge */}
            <Typography
              component={motion.div}
              variants={{
                rest: {
                  color: "rgb(139, 142, 143)",
                  backgroundColor: "rgb(185, 228, 248)",
                },
                hover: {
                  color: "#FFD700",
                  backgroundColor: "rgb(4, 19, 145)",
                },
              }}
              transition={{ duration: 0.4 }}
              variant="h6"
              sx={{
                position: "absolute",
                top: 5,
                right: 30,
                px: 1,
                py: 0.5,
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "0.87rem",
                display: "inline-block",
                minWidth: "28px",
                textAlign: "center",
                zIndex: 2,
              }}
            >
              {number}
            </Typography>

            <br />

            {/* Title */}
            <Typography
              variant="h6"
              component={motion.div}
              variants={{
                rest: { color: "rgb(34, 65, 65)" },
                hover: { color: "#FFFFFF" },
              }}
              transition={{ duration: 0.4 }}
              sx={{ fontWeight: "bold", mt: 5, mb: 0.5 }}
            >
              {title}
            </Typography>

            {/* Description */}
            <motion.div
              variants={{
                rest: { color: "rgba(80, 80, 80, 1)" },
                hover: { color: "#FFFFFF" },
              }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body2" sx={{ zIndex: 2 }}>
                {description}
              </Typography>
            </motion.div>
          </CardContent>
        </Card>
      </Box>
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
        className="py-16 max-w-5xl mx-auto text-left"
        style={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
        {/* Title */}
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

        {/* Logo */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src={Logo}
            alt="ISO 45001 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              width: "100%",
              height: "auto",
              borderRadius: "200px",
            }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            initial={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <br />
          <p
            className="mt-4 font-[Helvetica] text-center"
            style={{
              fontSize: "1rem",
              color: "#5A5A5A",
              maxWidth: "600px",
              margin: "0 auto"
            }}
          >
            Discover the transformative benefits that ISO 9001:2015 certification brings to your organization.
          </p>
          <br />
        </motion.div>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: { xs: "20px", sm: "30px", md: "40px" },
            mt: 5,
          }}
        >
          {renderCard("Improved Product and Service Quality", "ISO 9001 helps organizations implement consistent processes, leading to higher quality products and services.", FaStar, "01")}
          {renderCard("Enhanced Customer Satisfaction", "Focusing on customer needs and continuous improvement boosts satisfaction.", FaThumbsUp, "02")}
          {renderCard("Increased Efficiency and Reduced Costs", "ISO 9001 promotes streamlined operations, cutting waste and costs.", FaCogs, "03")}
          {renderCard("Improved Decision-Making", "Encourages data-driven, evidence-based decisions.", FaChartLine, "04")}
          {renderCard("Better Risk Management", "Proactively identify and address risks in operations.", FaShieldAlt, "05")}
          {renderCard("Stronger Customer & Stakeholder Relationships", "Continuous improvement strengthens trust and loyalty.", FaHandshake, "06")}
          {renderCard("Global Market Recognition", "ISO 9001 certification enhances credibility internationally.", FaGlobe, "07")}
          {renderCard("Employee Engagement and Responsibility", "Clear roles and better communication boost morale and involvement.", FaUsers, "08")}
          {renderCard("Legal and Regulatory Compliance", "Helps meet legal and regulatory requirements effectively.", FaBalanceScale, "09")}
          {renderCard("Culture of Continuous Improvement", "Encourages ongoing review and refinement of processes.", FaSyncAlt, "10")}

        </Box>

        <br />
        <br />
      </div>
    </div>
  );
};

export default ISO45001Benefits;
