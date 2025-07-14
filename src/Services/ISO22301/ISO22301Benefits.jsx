import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Logo from '../../assets/ISO22301-Logo.webp';
import { FaShieldAlt, FaCogs, FaBalanceScale, FaTrophy, FaBolt, FaHandshake, FaMoneyBillWave, FaStar } from "react-icons/fa";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO22301Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <motion.div
      key={number}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ width: "100%" }} // ensure motion div takes full width of parent Box
    >
      <Card
        sx={{
          width: "100%", // full width of Box wrapper
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

  const cardsData = [
    {
      title: "Minimizes Disruption",
      description:
        "By implementing a BCMS based on ISO 22301, organizations can effectively manage and minimize the impact of disruptions, ensuring that critical business functions continue to operate.",
      icon: FaCogs,
      number: "01",
    },
    {
      title: "Improved Risk Management",
      description:
        "ISO 22301 helps organizations identify, assess, and mitigate risks that could potentially disrupt their operations, enhancing overall risk management practices.",
      icon: FaShieldAlt,
      number: "02",
    },
    {
      title: "Enhanced Resilience",
      description:
        "The standard strengthens the organization’s ability to recover quickly from a crisis, ensuring business resilience in the face of disasters or emergencies.",
      icon: FaBolt,
      number: "03",
    },
    {
      title: "Increased Stakeholder Confidence",
      description:
        "Certification to ISO 22301 provides assurance to customers, partners, regulators, and other stakeholders that the organization is prepared for disruptions and has a robust plan in place.",
      icon: FaHandshake,
      number: "04",
    },
    {
      title: "Improved Reputation",
      description:
        "Being ISO 22301 certified shows that an organization is committed to business continuity, which can improve its reputation in the market place.",
      icon: FaStar,
      number: "05",
    },
    {
      title: "Compliance with Legal and Regulatory Requirements",
      description:
        "Many industries and governments require organizations to have business continuity plans in place. ISO 22301 helps meet these regulatory and contractual obligations.",
      icon: FaBalanceScale,
      number: "06",
    },
    {
      title: "Cost Savings",
      description:
        "By preparing for disruptions ahead of time and preventing prolonged downtime, organizations can reduce the costs associated with crises, such as lost revenue and reputational damage.",
      icon: FaMoneyBillWave,
      number: "07",
    },
    {
      title: "Competitive Advantage",
      description:
        "ISO 22301 certification demonstrates an organization's commitment to business continuity, which can be a differentiator in competitive markets, especially when bidding for contracts that require business continuity planning.",
      icon: FaTrophy,
      number: "08",
    },
  ];

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
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
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
            Rewards You Will Get After ISO 22301 <br />
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
            alt="ISO/IEC 17025:2017 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
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
            Strengthen resilience and stakeholder confidence with ISO 22301 — the global{" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>standard
            that empowers organizations to manage disruptions, protect critical
            operations, and ensure continuity in
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>
            times of crisis.
          </p>
          <br />
        </motion.div>

        {/* Cards container with 2 cards per row on md+ screens */}
      <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    mt: 5,
    flexWrap: "wrap",
    gap: { xs: "30px", md: "50px" },
  }}
>
  {cardsData.map(({ title, description, icon, number }) => (
    <Box
      key={number}
      sx={{
        flex: {
          xs: "1 1 100%", // 1 card per row on mobile
          sm: "1 1 100%", // 1 card per row on small
          md: "1 1 45%",  // 2 cards per row on medium+
        },
        maxWidth: {
          xs: "100%",
          sm: "100%",
          md: "45%",
        },
      }}
    >
      {renderCard(title, description, icon, number)}
    </Box>
  ))}
</Box>


        <br />
        <br />
      </div>
    </div>
  );
};

export default ISO22301Benefits;
