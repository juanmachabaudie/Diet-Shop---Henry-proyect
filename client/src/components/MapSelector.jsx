import React from "react";
import MapSelectorDraw from "./MapSelectorDraw";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getLocations,
  addLocations,
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
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function StoreSelector() {
  //dispatch and history hooks assignations
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  //store data
  const store = useSelector((store) => store);
  const locations = store.locations;
  const location = store.locations.location;

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
    <div>
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
