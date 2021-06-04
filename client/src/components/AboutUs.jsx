import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
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
    borderColor:'none',
    height: 300,
    width: 300,
    background: "teal",
    borderRadius: '50%',
    padding: 8,
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.items}>
          {/* francisco garrido */}
            <Grid Item xs={12} md={4}>
          <Box m={2}>
              <Paper
                className={classes.paper}
                elevation={12}
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
                  <IconButton href='https://www.linkedin.com/in/frangarrido0611/'><FontAwesomeIcon size={'2x'} icon={faLinkedin}/></IconButton>
                  <IconButton href='https://github.com/fg0611'><FontAwesomeIcon size={'2x'} icon={faGithubSquare}/></IconButton>
                </Box>
              </Paper>
          </Box>
            </Grid>
          {/* Juan Manuel Chabaudie */}
            <Grid Item xs={12} md={4}>
          <Box m={2}>
              <Paper
                className={classes.paper}
                elevation={12}
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
                  <IconButton href='https://www.linkedin.com/in/juanmachabaudie/'> <FontAwesomeIcon size={'2x'} icon={faLinkedin}/></IconButton>
                  <IconButton href='https://github.com/juanmachabaudie'> <FontAwesomeIcon size={'2x'} icon={faGithubSquare}/></IconButton>
                </Box>
              </Paper>
          </Box>
            </Grid>
            {/* Marcos Carrizo */}
            <Grid Item xs={12} md={4}>
          <Box m={2}>
              <Paper
                className={classes.paper}
                elevation={12}
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
                  <IconButton href='https://www.linkedin.com/in/marcoscarrizoo/' > <FontAwesomeIcon size={'2x'} icon={faLinkedin}/></IconButton>
                  <IconButton href='https://github.com/marcoscarrizoo'> <FontAwesomeIcon size={'2x'} icon={faGithubSquare}/></IconButton>
                </Box>
              </Paper>
          </Box>
            </Grid>
            {/* Kevin Queiro */}
            <Grid Item xs={12} md={4}>
          <Box m={2}>
              <Paper
                className={classes.paper}
                elevation={12}
              >
                <CardMedia
                  component="img"
                  className={classes.media}
                  src="https://avatars.githubusercontent.com/u/73044295?v=4"
                />
                <Box textAlign="center">
                  <Typography variant="body3" color="initial">
                    Kevin Queiro
                  </Typography>
                </Box>
                <Box alignItems="row" textAlign="center">
                  <IconButton href='https://www.linkedin.com/in/kevinqueiro/'> <FontAwesomeIcon size={'2x'} icon={faLinkedin}/></IconButton>
                  <IconButton href='https://github.com/KevinQueiro'> <FontAwesomeIcon size={'2x'} icon={faGithubSquare}/></IconButton>
                </Box>
              </Paper>
          </Box>
            </Grid>
            {/* Agustina Vardaro */}
            <Grid Item xs={12} md={4}>
          <Box m={2}>
              <Paper
                className={classes.paper}
                elevation={12}
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
                  <IconButton href='https://www.linkedin.com/in/agustina-vardaro-4300051b4/'> <FontAwesomeIcon size={'2x'} icon={faLinkedin}/></IconButton>
                  <IconButton href='https://github.com/Agustina-vardaro'> <FontAwesomeIcon size={'2x'} icon={faGithubSquare}/></IconButton>
                </Box>
              </Paper>
          </Box>
            </Grid>
            {/* Nicolás Núñez */}
            <Grid Item xs={12} md={4}>
          <Box m={2}>
              <Paper
                className={classes.paper}
                elevation={12}
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
                  <IconButton href='https://www.linkedin.com/in/nu%C3%B1ezdev/'><FontAwesomeIcon size={'2x'} icon={faLinkedin}/></IconButton>
                  <IconButton href='https://github.com/krono999'><FontAwesomeIcon size={'2x'} icon={faGithubSquare}/></IconButton>
                </Box>
              </Paper>
          </Box>
            </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;