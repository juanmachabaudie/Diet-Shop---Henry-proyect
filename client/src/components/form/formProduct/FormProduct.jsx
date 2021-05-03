import React from "react";
import "./FormProduct.css";
import { TextField, Chip, Button, Container, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  flowRender,
  getCategories,
  postProduct,
  putProduct,
} from "../../../redux/actions";
const FormProduct = ({ product }) => {
  const route = "/products";
  const history = useHistory();

  const redirect = () => {
    if (!route) return null;
    history.push(`${route}`);
  };
  const [form, setForm] = React.useState({
    name: "",
    price: "",
    description: "",
    image: false,
    categories: false,
    stock: "",
  });
  const [error, setError] = React.useState({
    name: false,
    price: false,
    description: false,
    btn: false,
    image: false,
    categories: false,
    stock: false,
  });

  const { categories, loading, render } = useSelector(
    (state) => state.formCategories
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (product !== undefined && product.name !== undefined) {
      setForm({
        ...form,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        categories: product.categories,
        id: product.id,
        stock: product.stock,
      });
    }

    dispatch(getCategories());
  }, [product, render, dispatch]);
  const expresions = {
    text: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    number: /^[0,1,2,3,4,5,6,7,8,9,10]{1,4}$/,
  };

  const handleInput = (v) => {
    const value = v.target.value;
    const name = v.target.name;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const validation = (v) => {
    const name = v.target.name;
    switch (name) {
      case "name":
        if (!expresions.text.test(form.name) && form.name !== "") {
          setError({
            ...error,
            name: true,
            btn: true,
          });
        } else {
          setError({
            ...error,
            name: false,
            btn: false,
          });
        }
        break;
      case "description":
        if (
          !expresions.text.test(form.description) &&
          form.description !== ""
        ) {
          setError({
            ...error,
            description: true,
            btn: true,
          });
        } else {
          setError({
            ...error,
            description: false,
            btn: false,
          });
        }
        break;
      case "price":
        if (!expresions.number.test(form.price) && form.price !== "") {
          setError({
            ...error,
            price: true,
            btn: true,
          });
        } else {
          setError({
            ...error,
            price: false,
            btn: false,
          });
        }
        break;
      case "stock":
        if (!expresions.number.test(form.stock) && form.stock !== "") {
          setError({
            ...error,
            stock: true,
            btn: true,
          });
        } else {
          setError({
            ...error,
            stock: false,
            btn: false,
          });
        }
        break;
      default:
        break;
    }
  };

  // Cargar imagenes a la base de datos

  const handleImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Product");
    setError({ ...error, image: true });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtqd9ehbe/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    const url = file.secure_url;
    setForm({ ...form, image: url });
    setError({ ...error, image: false });
  };

  // ESTE ES LA INFORMACION DE LOS CHIPS
  // const [chip, setChip]= React.useState(false)
  const handleClick = (c) => {
    console.log(c);
    setForm({
      ...form,
      categories: { ...form.categories, [c.name]: c.id },
    });
  };

  // Formulario listo para enviar al back
  const handleSubmit = async (v) => {
    v.preventDefault();
    console.log(form);
    if (product === undefined) {
      if (!form.categories && !form.image) {
        alert("rellene todo los campos");
      } else {
        dispatch(postProduct(form));
        dispatch(flowRender("editFormProduct"));
        console.log(form);
      }
    } else {
      dispatch(putProduct({ form: form, id: product.id }));
      dispatch(flowRender("editFormProduct"));
    }
    redirect();
  };
  return (
    <Container style={{ width: "500px", background: "transparent" }}>
      <Paper
        elevation={7}
        component="form"
        style={{
          height: "auto",
          backgroundColor: "rgba(255, 255, 255, 0.767)",
          paddingBottom: "20px",
        }}
      >
        <form
          onChange={handleInput}
          onKeyUp={validation}
          onSubmit={handleSubmit}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0px 20px 0px 20px",
            }}
          >
            <div style={{ width: "100%", marginTop: "12px" }}>
              {error.name ? (
                <TextField
                  label="Name"
                  type="text"
                  name="name"
                  style={{ width: "100%" }}
                  required
                  error
                />
              ) : product !== undefined ? (
                <TextField
                  label="Name"
                  type="text"
                  name="name"
                  style={{ width: "100%" }}
                  required
                  defaultValue={product.name}
                />
              ) : (
                <TextField
                  label="Name"
                  type="text"
                  name="name"
                  style={{ width: "100%" }}
                  required
                />
              )}
            </div>
            <div style={{ width: "100%", marginTop: "12px" }}>
              {error.description ? (
                <TextField
                  label="Description"
                  type="text"
                  name="description"
                  style={{ width: "100%" }}
                  required
                  error
                />
              ) : product !== undefined ? (
                <TextField
                  label="Description"
                  type="text"
                  name="description"
                  style={{ width: "100%" }}
                  required
                  defaultValue={product.description}
                />
              ) : (
                <TextField
                  label="Description"
                  type="text"
                  name="description"
                  style={{ width: "100%" }}
                  required
                />
              )}
            </div>

            <div style={{ width: "100%", marginTop: "12px" }}>
              {error.price ? (
                <TextField
                  label="Price"
                  type="number"
                  name="price"
                  required
                  inputProps={{ min: 0 }}
                  style={{ width: "100%" }}
                  error
                />
              ) : product !== undefined ? (
                <TextField
                  label="Price"
                  type="number"
                  name="price"
                  required
                  inputProps={{ min: 0 }}
                  defaultValue={product.price}
                  style={{ width: "100%" }}
                />
              ) : (
                <TextField
                  label="Price"
                  type="number"
                  name="price"
                  required
                  inputProps={{ min: 0 }}
                  style={{ width: "100%" }}
                />
              )}
            </div>
            <div style={{ width: "100%", marginTop: "12px" }}>
              {error.stock ? (
                <TextField
                  label="Stock"
                  type="number"
                  name="stock"
                  required
                  inputProps={{ min: 0 }}
                  style={{ width: "100%" }}
                  error
                />
              ) : product !== undefined ? (
                <TextField
                  label="Stock"
                  type="number"
                  name="stock"
                  required
                  inputProps={{ min: 0 }}
                  defaultValue={product.price}
                  style={{ width: "100%" }}
                />
              ) : (
                <TextField
                  label="Stock"
                  type="number"
                  name="stock"
                  required
                  inputProps={{ min: 0 }}
                  style={{ width: "100%" }}
                />
              )}
            </div>
            <div style={{ width: "100%", marginTop: "12px" }}>
              {loading
                ? "Cargando..."
                : categories.length !== 0 && !loading
                ? categories.map((c, i) => {
                    if (!form.categories) {
                      return (
                        <Chip
                          variant="outlined"
                          color="primary"
                          label={c.name}
                          style={{
                            border: "none",
                            boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.35)",
                            margin: "10px",
                          }}
                          onClick={() => {
                            handleClick(c);
                          }}
                        />
                      );
                    } else if (form.categories[c.name] !== undefined) {
                      return (
                        <Chip
                          variant="default"
                          color="primary"
                          label={c.name}
                          style={{
                            border: "none",
                            boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.35)",
                            margin: "10px",
                          }}
                          onClick={() => {
                            handleClick(c);
                          }}
                        />
                      );
                    } else {
                      return (
                        <Chip
                          variant="outlined"
                          color="primary"
                          label={c.name}
                          style={{
                            border: "none",
                            boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.35)",
                            margin: "10px",
                          }}
                          onClick={() => {
                            handleClick(c);
                          }}
                        />
                      );
                    }
                  })
                : "No hay categorias"}
            </div>
            <div>
              <div className="uploadImage">
                {error.image ? (
                  <>
                    <p className="uploadText">Loading Image</p>
                    <input
                      className="hidden"
                      type="file"
                      onChange={handleImage}
                    />
                  </>
                ) : !error.image && form.image !== "" ? (
                  <>
                    <p className="uploadText">Uploaded Image</p>
                    <input
                      className="hidden"
                      type="file"
                      onChange={handleImage}
                    />
                  </>
                ) : (
                  <>
                    <p className="uploadText">Upload Image</p>
                    <input
                      className="hidden"
                      type="file"
                      onChange={handleImage}
                    />
                  </>
                )}
              </div>
            </div>
            <div
              style={{ display: "flex", marginTop: "20px", marginLeft: "80%" }}
            >
              {error.btn ? (
                <Button
                  variant="contained"
                  style={{ background: "rgb(202, 195, 195)", color: "red" }}
                  disabled
                >
                  Enviar
                </Button>
              ) : (
                <Button
                  variant="contained"
                  type="submit"
                  style={{ background: "transparent" }}
                >
                  Enviar
                </Button>
              )}
            </div>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default FormProduct;
