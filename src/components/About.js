import React from "react";
import useStyles from "../styles";
import { Typography, Button, Grid, Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paperContainer}>
        <div
          className={classes.container}
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            marginLeft: "40px",
          }}
        >
          <Container maxWidth="sm">
            <Grid
              container
              spacing={2}
              justifyContent="center"
              style={{ marginTop: "150px" }}
            >
              <Typography
                variant="h4"
                align="center"
                style={{ color: "#FFFFFF" }}
                gutterBottom
              >
                My amazing story
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{ color: "#FFFFFF" }}
                paragraph
              >
                I am now 8 years old. When I was 4, I came to Denmark.I am good
                at geograghy. I made a sandwich and name it Tehran sandwich.
                When I am at home, I watch mostly youtube videos.I can speak 3
                languages: English, Persian, Danish. I am also good at drawing
                and math. When I wad 4 I practiced fornite dance too.
              </Typography>
            </Grid>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Read my stories
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </Paper>
    </>
  );
};

export default About;
