import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function SaleCard({ title, image, description, imageHeight }) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{
          height: `${imageHeight}px`,
          objectFit: "cover",
        }}
        image={image}
        title={title}
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
