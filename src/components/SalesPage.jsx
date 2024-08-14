import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import SaleCard from "./SaleCard";

const items = [
  {
    id: 1,
    title: "Card 1",
    image: "/static/images/cards/contemplative-reptile.jpg",
    description: "Description for Card 1",
  },
  {
    id: 2,
    title: "Card 2",
    image: "/static/images/cards/contemplative-reptile.jpg",
    description: "Description for Card 2",
  },
  // Add more card items here
];

const SalesPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(https://www.shutterstock.com/image-photo/back-school-concept-colorful-stationary-260nw-1076332547.jpg)`,
        backgroundSize: "cover",
        padding: "20px",
      }}
    >
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible
        indicators={false}
        animation="slide"
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <Grid container spacing={2} key={index}>
            {items.slice(index * 5, index * 5 + 5).map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <SaleCard
                  title={item.title}
                  image={item.image}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};

export default SalesPage;
