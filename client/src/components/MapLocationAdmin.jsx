import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MapLocationAdd from "./MapLocationAdd";
import MapLocationManage from "./MapLocationManage";
import MapSelector from "./StoreSelector";
import { getLocations } from "../redux/actions/locationActions";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}))

export default function MapLocationAdmin() {
  const classes = useStyles();
  let location = useSelector((store) => store.locations.location);
  console.log(location);
  let locations = useSelector((store) => store.locations.locations);

  //dispatch and history hooks assignations
  const dispatch = useDispatch();
  //this one brings to a global redux state all locations
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getLocations());
  }, [location]);

  return (
    <div>
      <div className={classes.offset}/>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
      <MapLocationAdd />
        <table>
          <th>
            <MapSelector />
          </th>
          <th>
            <MapLocationManage location={location} />
          </th>
        </table>
      </Grid>
    </div>
  );
}
