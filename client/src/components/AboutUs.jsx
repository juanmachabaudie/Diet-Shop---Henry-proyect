import React from "react";
import {
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  description: {
    flexDirection: "column",
  },
  media: {
    display: "flex",
    border: "0.3rem ",
    maxWidth: "10vw",
    borderRadius: "50%",
    height: "10vw",
    margin: "auto",
  },
  items: {
    justifyContent: "center",
    marginTop: "100px",
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.items}>
      <Grid container>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          <Typography variant="h6" color="initial">
            Nosotros Somos
          </Typography>
        </Grid>
        <Grid Item xs={12} md={4} justifyContent="center" alignItems="row">
          <Box m={5}>
            <CardMedia
              component="img"
              className={classes.media}
              src="https://media-exp1.licdn.com/dms/image/C5603AQHfJ8LIZYXPAQ/profile-displayphoto-shrink_800_800/0/1620336244593?e=1627516800&v=beta&t=Y3-jLrW1IDyPdeMDTR3OUsHLAtfHs20hCxeVa5XYM-E"
            />
            <Grid
              container
              spacing={1}
              direction="row"
              justify="center"
              alignItems="center"
              alignContent="center"
              wrap="nowrap"
            >
              <Typography variant="body3" color="LightGreen">
                Francisco Garrido
              </Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid Item xs={12} md={4} justifyContent="center" alignItems="center">
          <Box m={5}>
            <CardMedia
              component="img"
              className={classes.media}
              src="https://media-exp1.licdn.com/dms/image/C4E03AQGiaGGVvEuD3g/profile-displayphoto-shrink_800_800/0/1585156255505?e=1627516800&v=beta&t=lWpY-hA077tjJBN55mIWuuTOHZew1us1vgKAJuRJhDM"
            />
            <Grid
              container
              spacing={1}
              direction="row"
              justify="center"
              alignItems="center"
              alignContent="center"
              wrap="nowrap"
            >
              <Typography variant="body3" color="LightGreen">
                Juan Manuel Chabaudie
              </Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid Item xs={12} md={4}>
          <Box m={5}>
            <CardMedia
              component="img"
              className={classes.media}
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFbcG0MN5bzUg/profile-displayphoto-shrink_800_800/0/1620578482682?e=1627516800&v=beta&t=goMimjDVS_gV09p1EY3xUOW2ZqtynkTlsHoAJqYoC7M"
            />

            <Grid
              container
              spacing={1}
              direction="row"
              justify="center"
              alignItems="center"
              alignContent="center"
              wrap="nowrap"
            >
              <Typography variant="body3" color="initial">
                Marcos Carrizo
              </Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid Item xs={12} md={4}>
          <CardMedia
            component="img"
            className={classes.media}
            src="https://www.labicok.com/wp-content/uploads/2020/09/default-user-image.png"
          />
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
          >
            <Typography variant="body3" color="initial">
              Kevin Queiro
            </Typography>
          </Grid>
        </Grid>
        <Grid Item xs={12} md={4}>
          <CardMedia
            component="img"
            className={classes.media}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGoffPViKl9cw/profile-displayphoto-shrink_800_800/0/1622053447239?e=1627516800&v=beta&t=MQJGUZB6VGagu9-ZcSBe1vmBmZKY3vL11E8Ddawskqw"
          />
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
          >
            <Typography variant="body3" color="initial">
              Agustina Vardaro
            </Typography>
          </Grid>
        </Grid>
        <Grid Item xs={12} md={4}>
          <CardMedia
            component="img"
            className={classes.media}
            src="https://www.labicok.com/wp-content/uploads/2020/09/default-user-image.png"
          />
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
          >
            <Typography variant="body3" color="initial">
              Nicolás Núñez
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
