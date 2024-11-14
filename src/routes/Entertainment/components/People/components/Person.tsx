import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface IPerson {
  name: string;
  title: string;
  image: string;
  socials?: {
    instragram?: string;
    tiktok?: string;
    facebook?: string;
    spotify?: string;
    soundCloud?: string;
    linkTree?: string;
  };
}

function Person(props: IPerson) {
  const { name, image, title, socials } = props;
  return (
    <Card
      sx={{
        minWidth: 345,
        background: "linear-gradient(to bottom right, #51daff, #2b6eb0)",
        color: "black",
      }}
    >
      <CardMedia component="img" image={image} />
      <CardContent sx={{ padding: "16px 16px 0 16px" }}>
        <Typography>{name}</Typography>
        <Typography>{title}</Typography>
      </CardContent>
      <CardActions sx={{ padding: "16px" }}>
        <Button sx={{ color: "white", padding: 0 }} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Person;
