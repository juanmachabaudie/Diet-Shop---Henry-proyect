import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import firebase, { storage } from "../firebase.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { uploadImg } from '../redux/actions/imagesAction.js';

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));

const UploadButton = (props) => {
  const dispatch=useDispatch();
  const classes = useStyles();
  
  const [uploadValue, setUploadValue] = useState(0);
  const [image, setImage] = useState([]);
  
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/${props.name}/${file.name}`).put(file);

    storageRef.on(
      "state_changed",
      (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadValue(percentage);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        await storage
          .ref(`/${props.name}`)
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setImage(url);
            dispatch(uploadImg(url))
          });
      }
    );
  };

  return (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleUpload}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<FontAwesomeIcon icon={faCloudUploadAlt} />}
          component="span"
        >
          Agregar Imagen
        </Button>
      </label>
      <progress value={uploadValue} max="100"></progress>
      <img width="250" src={image} alt="" />
    </div>
  );
};

export default UploadButton;

// <div>
//   <label for="mainPic">Imagenes del producto:</label>

//   <input name="files" type="file" onChange={handleUpload} />

//   <progress value={uploadValue} max="100"></progress>

//   <img width="320" src={image} alt="" />
// </div>
