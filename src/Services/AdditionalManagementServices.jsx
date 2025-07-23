import React from "react";
import {
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BiFirstPage } from "react-icons/bi";

import processGif from "../assets/telephone.gif";
import fingurGif from "../assets/finger.gif";
import adminImg from "../assets/admin.webp";
import hrImg from "../assets/hr.webp";
import inventoryImg from "../assets/inventory.webp";
import mrmImg from "../assets/mrm.webp";

export default function Services() {
  const navigate = useNavigate();

  const serviceCards = [
    {
      title: "Administration",
      description: "Efficient support for daily business operations.",
      image: adminImg,
      link: "/administration",
    },
    {
      title: "Human Resources (HR)",
      description: "Solutions for managing talent and people processes.",
      image: hrImg,
      link: "/hr",
    },
    {
      title: "Inventory Management",
      description: "Track, manage, and optimize your inventory.",
      image: inventoryImg,
      link: "/inventory",
    },
    {
      title: "Management Review Meetings (MRM)",
      description: "Structured evaluations for continual improvement.",
      image: mrmImg,
      link: "/mrm",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        padding: { xs: 2, sm: 4, md: 8 },
        minHeight: "100vh",
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 6,
          height: { xs: 150, sm: 180, md: 200 },
          mb: 3,
        }}
      >
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{
            position: "absolute",
            color: "#003B73",
            fontFamily: "Arial",
            opacity: 0.15,
            fontSize: { xs: "3rem", sm: "5rem", md: "8rem" },
            zIndex: 1,
            userSelect: "none",
          }}
        >
          OUR SERVICES
        </Typography>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#003B73",
              fontFamily: "Arial",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            What we can do for you
          </Typography>

          <Box
            component="img"
            src={fingurGif}
            alt="finger gif"
            sx={{
              width: { xs: 30, sm: 40, md: 50 },
              height: { xs: 30, sm: 40, md: 50 },
            }}
          />
        </Box>
      </Box>

      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          color: "black",
          fontFamily: "Arial",
          textAlign: "center",
          fontSize: { xs: "1.3rem", sm: "2rem", md: "3rem" },
          mb: 2,
        }}
      >
        Our Additional Management Services
      </Typography>

      <Typography
        component="p"
        sx={{
          fontFamily: "Helvetica",
          color: "#5A5A5A",
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
          textAlign: "center",
          maxWidth: 900,
          mx: "auto",
          mb: 4,
          fontWeight: "500",
          lineHeight: 1.5,
        }}
      >
        Our Additional Management Services provide essential support functions that enhance
        organizational effectiveness and sustainability. This section covers key operational areas including
        <b> Administration</b>, <b>Human Resources (HR)</b>, <b>Management Review Meetings (MRM)</b>,
        and <b>Inventory Management</b>. These services form a strong foundation for efficient business management and informed decision-making.
      </Typography>

      <Grid
        container
        columnSpacing={6}
        rowSpacing={6}
        justifyContent="center"
        sx={{ mb: 10 }}
      >
        {serviceCards.map((card, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            key={idx}
            sx={{ display: "flex" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ flexGrow: 1, height: "100%" }}
            >
              <Card
                onClick={() => navigate(card.link)}
                sx={{
                  cursor: "pointer",
                  borderRadius: 3,
                  boxShadow: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                    boxShadow: "0 8px 20px rgba(25, 118, 210, 0.4)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 240,
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    minHeight: 180,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 4,
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold", color: "#003B73", fontSize: "1.2rem" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 8,
          mb: 8,
          p: 3,
          borderRadius: 3,
          boxShadow: 2,
          backgroundColor: "#f9fafb",
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 3,
            justifyContent: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 3,
              justifyContent: { xs: "center", sm: "flex-start" },
              textAlign: { xs: "center", sm: "left" },
              flexGrow: 1,
            }}
          >
            {/* Optional additional content */}
          </Box>
        </Box>

        <Typography
          sx={{
            mt: 3,
            color: "gray.600",
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          We make management easy by guiding you through every step — from initial consultation to seamless implementation — with zero stress and complete support.
        </Typography>
      </Box>

    </Box>
  );
}
