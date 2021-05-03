import React from "react";
import { TextField, Button, Container, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  postCategories,
  putCategories,
  getCategories,
  flowRender,
} from "../../../redux/actions";
const FormCategory = ({ category }) => {
  const route = "/dashboard";
  const history = useHistory();

  const redirect = () => {
    if (!route) return null;
    history.push(`${route}`);
  };
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    name: "",
  });
  React.useEffect(() => {
    if (category !== undefined) {
      setForm({
        ...form,
        name: category.name,
        id: category.id,
      });
    }
  }, [category]);

  const handleInput = (v) => {
    const value = v.target.value;
    const name = v.target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (v) => {
    v.preventDefault();
    // debe hacer un post o put a categories
    if (category !== undefined) {
      // hacemos un un put
      dispatch(putCategories({ name: form.name, id: category.content.id }));
      dispatch(flowRender("editForm"));
    } else {
      //hacemos un post

      dispatch(postCategories(form.name));
      dispatch(flowRender("editForm"));
      dispatch(getCategories());
    }
    redirect();
  };

  // ACA VAN LAS VALIDACIONES
  const expresions = {
    text: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    number: /^[0,1,2,3,4,5,6,7,8,9,10]{1,4}$/,
  };

  const [error, setError] = React.useState({
    name: false,
    description: false,
    btn: false,
  });
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
      default:
        break;
    }
  };
  return (
    <Container style={{ width: "500px" }}>
      <Paper
        elevation={7}
        component="form"
        style={{
          height: "140px",
          backgroundColor: "rgba(255, 255, 255, 0.767)",
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
            <div style={{ width: "100%", marginTop: "20px" }}>
              {error.name ? (
                <TextField
                  label="Name"
                  type="text"
                  name="name"
                  style={{ width: "100%" }}
                  required
                  error
                />
              ) : category !== undefined ? (
                <TextField
                  label="Name"
                  type="text"
                  name="name"
                  style={{ width: "100%" }}
                  required
                  defaultValue={category.name}
                />
              ) : (
                <TextField
                  label="Name"
                  type="text"
                  name="name"
                  style={{ width: "100%" }}
                  required
                  // defaultValue={category.name}
                />
              )}
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

export default FormCategory;
