import React from "react";
import { useSelector } from "react-redux";
import { Grid, makeStyles, Box, withStyles } from "@material-ui/core";
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

const ProductRating = () => {
  const classes = useStyles();

  const reviews = useSelector((store) => store.products.reviews);

  let promRevs = 0;
  let noRating = 0;
  if (reviews.length) {
    for (let rev of reviews) {
      if(rev.rating !== 0){
      promRevs += rev.rating;
    } else {
      noRating = noRating + 1;
    }
  }
    promRevs = Math.round(promRevs / (reviews.length-noRating));
  }

  return (
    <div className={classes.root} key={promRevs}>
      <Grid>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <StyledRating
            name="read-only"
            value={promRevs}
            precision={1}
            icon={<FavoriteIcon fontSize="inherit" />}
            readOnly
          />
        </Box>
      </Grid>
    </div>
  );
};

export default ProductRating;