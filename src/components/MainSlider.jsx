import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Typography, CardMedia } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const HeaderWithIcons = ({ icons }) => (
  <>
    {icons.map((icon, index) => (
      <Box
        key={index}
        sx={{
          position: "absolute",
          top: icon.position.top,
          left: icon.position.left,
          display: "flex",
          alignItems: "center",
          color: "#fff",
        }}
      >
        {/* {icon.component} */}
      </Box>
    ))}
  </>
);
const CenteredText = ({ text }) => (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "5px",
      padding: "10px",
    }}
  >
    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
      {text}
    </Typography>
  </Box>
);

const SlideshowWithFixedIconsAndCenteredText = () => {
  const slides = [
    {
      image:
        "https://www.shutterstock.com/image-photo/school-notebook-on-blue-background-260nw-753361672.jpg",
      icons: [
        {
          component: <HomeIcon sx={{ fontSize: 40 }} />,
          text: "Home",
          position: { top: "10%", left: "10%" },
        },
        {
          component: <InfoIcon sx={{ fontSize: 40 }} />,
          text: "Info",
          position: { top: "50%", left: "30%" },
        },
        {
          component: <ContactMailIcon sx={{ fontSize: 40 }} />,
          text: "Contact",
          position: { top: "70%", left: "70%" },
        },
      ],
      text: "Welcome to Our Site!",
    },
    {
      image: "https://www.example.com/image2.jpg",
      icons: [
        {
          component: <PercentIcon sx={{ fontSize: 40 }} />,
          text: "Support",
          position: { top: "20%", left: "5%" },
        },
        {
          component: <PercentIcon sx={{ fontSize: 40 }} />,
          text: "Home",
          position: { top: "60%", left: "50%" },
        },
      ],
      text: "Our Latest Updates!",
    },
    {
      image: "https://www.example.com/image3.jpg",
      icons: [
        {
          component: <InfoIcon sx={{ fontSize: 40 }} />,
          text: "About Us",
          position: { top: "15%", left: "25%" },
        },
        {
          component: <InfoIcon sx={{ fontSize: 40 }} />,
          text: "Support",
          position: { top: "55%", left: "60%" },
        },
        {
          component: <HomeIcon sx={{ fontSize: 40 }} />,
          text: "Welcome",
          position: { top: "75%", left: "20%" },
        },
      ],
      text: "Start With Us!",
    },
  ];

  return (
    <Box sx={{ width: "100%", margin: "auto" }}>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: "250px",
              width: "100%",
              position: "relative",
              borderRadius: "15px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={slide.image}
              alt={`Slide ${index + 1}`}
              sx={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
            <HeaderWithIcons icons={slide.icons} />
            <CenteredText text={slide.text} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default SlideshowWithFixedIconsAndCenteredText;
