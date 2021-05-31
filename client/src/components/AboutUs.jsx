import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  Box,
  Paper,
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
    marginTop: "20px",
  },
  paper: {
    height: 305,
    width: 245,
    background: "teal",
  },
  Boxes: {
    display: "flex",
    flexDirection: "row",
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.items}>
        <Box className={classes.Boxes}>
          <Box m={2}>
            <Grid Item xs={12} md={4}>
              <Paper
                className={classes.paper}
                elevation={12}
                style={{
                  padding: 8,
                  border: "1px solid black",
                }}
              >
                <CardMedia
                  component="img"
                  className={classes.media}
                  src="https://media-exp1.licdn.com/dms/image/C5603AQHfJ8LIZYXPAQ/profile-displayphoto-shrink_800_800/0/1620336244593?e=1627516800&v=beta&t=Y3-jLrW1IDyPdeMDTR3OUsHLAtfHs20hCxeVa5XYM-E"
                />
                <Box textAlign="center">
                  <Typography variant="body3" color="LightGreen">
                    Francisco Garrido
                  </Typography>
                </Box>
                <Box alignItems="row" textAlign="center">
                  <IconButton aria-label="LinkedIn">LinkedIn</IconButton>

                  <IconButton aria-label="LinkedIn">GitHub</IconButton>
                </Box>
                <Typography variant="h7" color="initial">
                  "Trabajando de acuerdo con las especificaciones del cliente;
                  sin dejar de ofrecer nuevas ideas. "
                </Typography>
              </Paper>
            </Grid>
          </Box>

          <Box m={2}>
            <Grid Item xs={12} md={4}>
              <Paper
                className={classes.paper}
                elevation={12}
                style={{
                  padding: 8,
                  border: "1px solid black",
                }}
              >
                <CardMedia
                  component="img"
                  className={classes.media}
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQGiaGGVvEuD3g/profile-displayphoto-shrink_800_800/0/1585156255505?e=1627516800&v=beta&t=lWpY-hA077tjJBN55mIWuuTOHZew1us1vgKAJuRJhDM"
                />
                <Box textAlign="center">
                  <Typography variant="body3" color="LightGreen">
                    Juan Manuel Chabaudie
                  </Typography>
                </Box>
                <Box alignItems="row" textAlign="center">
                  <IconButton aria-label="LinkedIn">LinkedIn</IconButton>

                  <IconButton aria-label="LinkedIn">GitHub</IconButton>
                </Box>
                <Typography variant="h7" color="initial">
                  "Me considero amable, detallista, divertido y dispuesto a
                  trabajar "
                </Typography>
              </Paper>
            </Grid>
          </Box>

          <Box m={2}>
            <Grid Item xs={12} md={4}>
              <Paper
                className={classes.paper}
                elevation={12}
                style={{
                  padding: 8,
                  border: "1px solid black",
                }}
              >
                <CardMedia
                  component="img"
                  className={classes.media}
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQFbcG0MN5bzUg/profile-displayphoto-shrink_800_800/0/1620578482682?e=1627516800&v=beta&t=goMimjDVS_gV09p1EY3xUOW2ZqtynkTlsHoAJqYoC7M"
                />

                <Box textAlign="center">
                  <Typography variant="body3" color="initial">
                    Marcos Carrizo
                  </Typography>
                </Box>
                <Box alignItems="row" textAlign="center">
                  <IconButton aria-label="LinkedIn">LinkedIn</IconButton>

                  <IconButton aria-label="LinkedIn">GitHub</IconButton>
                </Box>
                <Typography variant="h7" color="initial">
                  "Tengo formacion en desarrolo web full stack pero amo el
                  Front-End"
                </Typography>
              </Paper>
            </Grid>
          </Box>
        </Box>

        <Box className={classes.Boxes}>
          <Box m={2}>
            <Grid Item xs={12} md={4}>
              <Paper
                className={classes.paper}
                elevation={12}
                style={{
                  padding: 8,
                  border: "1px solid black",
                }}
              >
                <CardMedia
                  component="img"
                  className={classes.media}
                  src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t31.18172-8/10386925_10204346476491964_9118911838597778133_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=Cm26FP_yzBoAX86xXjp&_nc_ht=scontent.ftuc4-1.fna&oh=2130e8f47d202ec67bb8197f2dcd2eda&oe=60DAD0EB"
                />
                <Box textAlign="center">
                  <Typography variant="body3" color="initial">
                    Kevin Queiro
                  </Typography>
                </Box>
                <Box alignItems="row" textAlign="center">
                  <IconButton aria-label="LinkedIn">LinkedIn</IconButton>

                  <IconButton aria-label="LinkedIn">GitHub</IconButton>
                </Box>
                <Typography variant="h7" color="initial">
                  "Hi! I'm Kevin Queiro, a FullStack developer graduated from
                  henry, i love programing"
                </Typography>
              </Paper>
            </Grid>
          </Box>
          <Box m={2}>
            <Grid Item xs={12} md={4}>
              <Paper
                className={classes.paper}
                elevation={12}
                style={{
                  padding: 8,
                  border: "1px solid black",
                }}
              >
                <CardMedia
                  component="img"
                  className={classes.media}
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQGoffPViKl9cw/profile-displayphoto-shrink_800_800/0/1622053447239?e=1627516800&v=beta&t=MQJGUZB6VGagu9-ZcSBe1vmBmZKY3vL11E8Ddawskqw"
                />
                <Box textAlign="center">
                  <Typography variant="body3" color="initial">
                    Agustina Vardaro
                  </Typography>
                </Box>
                <Box alignItems="row" textAlign="center">
                  <IconButton aria-label="LinkedIn">LinkedIn</IconButton>

                  <IconButton aria-label="LinkedIn">GitHub</IconButton>
                </Box>
                <Typography variant="h7" color="initial">
                  "Soy una joven proactiva que disfruta tanto del trabajo
                  individual como en equipo"
                </Typography>
              </Paper>
            </Grid>
          </Box>
          <Box m={2}>
            <Grid Item xs={12} md={4}>
              <Paper
                className={classes.paper}
                elevation={12}
                style={{
                  padding: 8,
                  border: "1px solid black",
                }}
              >
                <CardMedia
                  component="img"
                  className={classes.media}
                  src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t1.18169-9/11800129_10207233501506659_8716776057743329750_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=inHmUSo3_dQAX95zOR_&_nc_ht=scontent.ftuc4-1.fna&oh=852f5919923a4e31954a70b0312e7684&oe=60D892AC"
                />
                <Box textAlign="center">
                  <Typography variant="body3" color="initial">
                    Nicolás Núñez
                  </Typography>
                </Box>
                <Box alignItems="row" textAlign="center">
                  <IconButton aria-label="LinkedIn">LinkedIn</IconButton>

                  <IconButton aria-label="LinkedIn">GitHub</IconButton>
                </Box>
                <Typography variant="h7" color="initial">
                  "Soy Desarrollador Full Stack con Inclinación hacia el
                  Front-End"
                </Typography>
              </Paper>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default AboutUs;
