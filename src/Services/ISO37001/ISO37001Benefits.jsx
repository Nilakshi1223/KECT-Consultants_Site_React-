import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Logo from '../../assets/ISO37001-Logo.webp';
import { FaShieldAlt, FaBalanceScale, FaTrophy, FaHandshake, FaGlobe, FaGavel, FaCogs, FaUsers } from "react-icons/fa";
import { useMediaQuery } from '@mui/material';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO37001Benefits = () => {
  // Detect if screen is small (below 600px width)
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const renderCard = (title, description, IconComponent, number) => (
    <motion.div
      key={number}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{
        flex: isSmallScreen ? "1 1 100%" : "1 1 calc(50% - 20px)", // 100% width if small screen else 50%
        maxWidth: isSmallScreen ? "100%" : "calc(50% - 20px)",
        boxSizing: "border-box",
        marginBottom: 24
      }}
    >
      <Card
        sx={{
          width: "100%", // full width of flex item
          height: { xs: "auto", sm: 250 },
          position: "relative",
          paddingTop: 4,
          boxSizing: "border-box"
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
        className="py-16 max-w-5xl mx-auto text-left"
        style={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
        {/* Title, Logo, etc. */}

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
            Rewards You Will Get After ISO 37001 <br />
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
                  Fight corruption and foster a culture of integrity with ISO 37001:2016 — the international standard designed to help organizations prevent, detect, and respond to bribery risks. Build trust, enhance transparency, and demonstrate your commitment to ethical business practices across all levels.
                  </p>
                  <br />
                </motion.div>



        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            mt: 5,
          }}
        >
          {renderCard(
            "Prevention of Bribery and Corruption",
            "ISO 37001 helps organizations implement effective anti-bribery measures, reducing the risk of corruption and unethical practices that can harm their reputation and business operations.",
            FaShieldAlt,
            "01"
          )}
          {renderCard(
            "Improved Compliance",
            "The standard helps organizations meet legal, regulatory, and contractual obligations related to anti-bribery, ensuring they stay compliant with anti-corruption laws globally.",
            FaBalanceScale,
            "02"
          )}
          {renderCard(
            "Enhanced Reputation and Trust",
            "Certification to ISO 37001 demonstrates an organization’s commitment to ethical practices, which can improve its reputation among customers, business partners, and stakeholders.",
            FaHandshake,
            "03"
          )}
          {renderCard(
            "Reduced Legal and Financial Risks",
            "By implementing robust anti-bribery controls, organizations reduce their exposure to legal liabilities, fines, and reputational damage resulting from bribery and corruption scandals.",
            FaGavel,
            "04"
          )}
          {renderCard(
            "Competitive Advantage",
            "ISO 37001 certification can differentiate an organization in the marketplace, especially in industries where ethical conduct is a critical factor in attracting clients and business opportunities.",
            FaTrophy,
            "05"
          )}
          {renderCard(
            "Stronger Internal Controls",
            "The standard helps organizations strengthen internal controls, processes, and oversight mechanisms, creating a more transparent and accountable organizational culture.",
            FaCogs,
            "06"
          )}
          {renderCard(
            "Global Reach",
            "ISO 37001 is recognized internationally, allowing organizations to demonstrate their commitment to anti-bribery practices when operating in various countries and regions, and helping them engage with global partners who prioritize ethical conduct.",
            FaGlobe,
            "07"
          )}
          {renderCard(
            "Improved Stakeholder Confidence",
            "Organizations that are certified to ISO 37001 reassure investors, customers, and other stakeholders that they are committed to fighting bribery and corruption, fostering stronger business relationships.",
            FaUsers,
            "08"
          )}
        </Box>
      </div>
    </div>
  );
};

export default ISO37001Benefits;
