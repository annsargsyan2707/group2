import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const items = [
  {
    id: 6,
    image:
      "https://www.abydospress.com/cdn/shop/products/IMG_5472_1024x1024.jpg?v=1675941598",
    description: "Copybooks ",
  },
  {
    id: 5,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/022/359/862/small/set-of-simple-book-cover-templates-with-beautiful-hand-drawn-floral-decorations-abstract-botanical-background-size-a4-for-notebook-diaries-planner-school-brochure-book-catalog-vector.jpg",
    description: "Notebooks ",
  },
  {
    id: 1,
    image:
      "https://awakeandmindful.com/wp-content/uploads/2018/05/coloring-pencils-pens-markers-adult-coloring-books-820x547.jpg",
    description: "Pencils ",
  },

  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1156434561/photo/top-view-of-collection-of-pens-on-white-background.jpg?s=612x612&w=0&k=20&c=u_gItgS4CjP08rL_kfv4bbitHIQEvbTeHZMB2LD8Md4=",
    description: "Pens",
  },
  {
    id: 3,
    image:
      "https://ae01.alicdn.com/kf/S40a92c9b0b334bf0b6ad3898bec12523F.jpg_640x640q90.jpg",
    description: "Erasers",
  },
  {
    id: 4,
    image:
      "https://c1.wallpaperflare.com/preview/19/646/393/shear-office-metal-cut.jpg",
    description: "Scissors",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jUyzaUa4o_KnEmzNRlnIKtTST2kBwY8TeSqaeOAb4B0zwMYo0AjrHmQ6t8LYE1vjAe4&usqp=CAU",
    description: "Rulers ",
  },
];

const imageHeight = 200;

export default function SalesPage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(https://img.freepik.com/free-vector/back-school-sale-background_23-2149031526.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        width: "1000px",
        height: `${imageHeight + 60}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible
        indicators={false}
        animation="slide"
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        {Array.from({ length: Math.ceil(items.length / 5) }).map((_, index) => (
          <Grid container spacing={2} key={index} sx={{ height: "100%" }}>
            {items.slice(index * 5, index * 5 + 5).map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={item.id}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    sx={{
                      height: `${imageHeight}px`,
                      objectFit: "cover",
                    }}
                    image={item.image}
                    title={item.description}
                    component="img"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
}
