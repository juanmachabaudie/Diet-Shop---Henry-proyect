import React from "react";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import "./FormCategory.css";
import { Container, Avatar } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import FormCategory from "../formCategory/FormCategory";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategories, getCategories } from "../../../redux/actions";
const FormEditCategory = () => {
  const { categories, loading, render } = useSelector(
    (state) => state.formCategories
  );
  const dispatch = useDispatch();
  const route = "/dashboard";
  const history = useHistory();

  const redirect = () => {
    if (!route) return null;
    history.push(`${route}`);
  };

  React.useEffect(() => {
    dispatch(getCategories());
  }, [render, dispatch]);

  const [edit, setEdit] = React.useState({
    active: false,
    name: "",
    category: "",
  });
  const handleBtnDelete = (c) => {
    // debemos hacer una acción que elimine la categoria
    dispatch(deleteCategories(c.id));
  };
  const handleBtnEdit = (c) => {
    // debemos hacer que aparezca un formCategy con un value por default
    setEdit({
      ...edit,
      active: true,
      name: c.name,
      category: c,
    });
  };

  return (
    <Container
      style={{
        width: "500px",
        padding: "10px",
        marginTop: "60px",
        background: "transparent",
        height: "490px",
        overflow: "auto",
        overflowX: "hidden",
      }}
    >
      {categories.length === 0 && !loading ? (
        <h1>Ingrese categorias para poder modificarlas</h1>
      ) : loading ? (
        <h1> Cargando...</h1>
      ) : !edit.active ? (
        categories.map((c) => {
          return (
            <div
              style={{ display: "flex", alingItems: "center" }}
              className="FCselect"
            >
              <Avatar
                alt="Images"
                src="https://www.unilatina.edu.co/blog/wp-content/uploads/2016/12/fractal-292069_640.jpg"
              />
              <p style={{ margin: "10px", fontSize: "25px" }}>{c.name}</p>
              <div
                style={{ width: "10%", display: "flex", marginRight: "50px" }}
              >
                <button
                  className="FCbtn"
                  onClick={() => {
                    handleBtnDelete(c);
                  }}
                >
                  <DeleteOutlineOutlinedIcon />
                </button>
                <button
                  className="FCbtn"
                  onClick={() => {
                    handleBtnEdit(c);
                  }}
                >
                  <EditOutlinedIcon />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <FormCategory category={{ name: edit.name, content: edit.category }} />
      )}
    </Container>
  );
};
export default FormEditCategory;
