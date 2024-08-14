import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Typography, CardMedia } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PercentIcon from "@mui/icons-material/Percent";
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
        {icon.component}
      </Box>
    ))}
  </>
);
const CenteredText = ({ text }) => (
  <Box
    sx={{
      position: "absolute",
      top: "30%",
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
    <Typography variant="h4">{text}</Typography>
  </Box>
);

const SlideshowWithFixedIconsAndCenteredText = () => {
  const slides = [
    {
      image:
        "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/poster/ru/bignew/992x413/school_sale_992.webp",
      icons: [
        {
          component: <ShoppingBasketIcon sx={{ fontSize: 40 }} />,

          position: { top: "10%", left: "10%" },
        },
        {
          component: <ShoppingBasketIcon sx={{ fontSize: 40 }} />,

          position: { top: "50%", left: "30%" },
        },
        {
          component: <ShoppingBasketIcon sx={{ fontSize: 40 }} />,

          position: { top: "50%", left: "90%" },
        },
      ],
      text: "MAJOR SAVING!",
    },
    {
      image:
        "https://universalbranding.co.uk/wp-content/uploads/branded/paper-and-pads/notebooks/a5-deluxe-design-notebook-cover-grey-m_400.jpg",
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
      text: "MORE CHOICE!",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG38Wyw_9ZjgfKKkSbBxrgIS6SfDG8G-T2oQ&s",
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
      text: "Explore Our Services!",
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
