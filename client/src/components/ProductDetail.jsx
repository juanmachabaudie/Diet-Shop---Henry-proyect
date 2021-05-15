import { useSelector } from "react-redux";
import defaultImg from '../imgs/default.svg'
import { Grid, makeStyles, Typography, Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetail() {

  const detail = useSelector((store) => store.products.product);
  
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">{detail.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={detail.image || defaultImg} alt="" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography paragraph="true">Categorias: {detail.categories && detail.categories.map(
            cate=>(<Typography>→{cate}</Typography> ))}</Typography>
          <Typography paragraph="true">Detalle: {detail.description}</Typography>
          <Typography paragraph="true">Stock: {detail.stock}</Typography>
          <input type="number" />
          <Button
        variant="contained"
        color="primary"
        endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
      >
        Send
      </Button>
        </Grid>
      </Grid>
    </div>
  );
}
    