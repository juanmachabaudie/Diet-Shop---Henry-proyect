import React, {useEffect} from "react";
import MapSelectorDraw from "./MapSelectorDraw";
import { useDispatch, useSelector } from "react-redux";
import {
  getLocations,
  getLocation,
} from "../redux/actions/locationActions";
import {
  makeStyles,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alginItems:"center",
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(5),
    maxWidth:300,
  },
  offset: theme.mixins.toolbar,
}));

export default function StoreSelector() {
  //dispatch and history hooks assignations
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const locations = store.locations;
  const location = store.locations.location;

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const [open, setOpen] = React.useState(false);
  const [selection, setSelection] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  let options;
  if (locations?.locations) {
    options = locations.locations.map((e) => (
      <MenuItem key={e.uuid} value={e.uuid}>
        {e.description}
      </MenuItem>
    ));
  } else if (locations?.message) {
    <p>{locations.message}</p>;
  } else {
    <p>No hay información</p>;
  }

  function handleSelection(e) {
    if (e.target.value === "") {
      return;
    }
    //key is the location's uuid
    setSelection(e.target.value);
    dispatch(getLocation(e.target.value));
  }

  return (
    <div className={classes.root}>
      <div className={classes.offset}/>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">SUCURSAL</InputLabel>

        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selection}
          onChange={handleSelection}
        >
          <MenuItem value="">Ninguna</MenuItem>
          {options}
        </Select>
      </FormControl>
      <MapSelectorDraw location={location} />
    </div>
  );
}