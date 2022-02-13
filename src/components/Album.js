import React from "react";
import useStyles from "../styles";
import { cards } from "../data";
import CheckBox from "./CheckBox";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@material-ui/core";

const Album = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card.image}>
            <Card className={classes.card} xs={12} sm={6} md={4}>
              <CardMedia
                className={classes.cardMedia}
                image={card.image}
                title="My son"
              />

              <CardContent className={classes.content}>
                {/* <Typography gutterBottom variant="h5">
                  Heading
                </Typography> */}
                <Typography>{card.location}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="primary" startIcon={<DeleteIcon />}>
                  Discard
                </Button>
                <CheckBox />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Album;
