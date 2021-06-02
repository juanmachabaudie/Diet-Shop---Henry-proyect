  
import React from "react";
import {
  Grid,
  makeStyles,
  Avatar,
  Typography,
  Paper,
  Box,
  withStyles,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

const ReviewCard = ({ text, userName, userLast, rating, date }) => {
 
const day = date.split('T')[0];

  const classes = useStyles();

  return (
    <div className={classes.root} key={userName}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{userName[0]}</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{userName} {userLast}</Typography>
            <Typography>{day}</Typography>
            <Typography>{text}</Typography>
          </Grid>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <StyledRating
              name="read-only"
              defaultValue={rating}
              precision={1}
              readOnly
              icon={<FavoriteIcon fontSize="inherit" />}
            />
          </Box>
        </Grid>
      </Paper>
    </div>
  );
};

export default ReviewCard;