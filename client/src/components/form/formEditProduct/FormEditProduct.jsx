import React from "react";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Container, Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import FormProduct from "../formProduct/FormProduct";
import Swal from "sweetalert2";
import "./FormCategory.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../../../redux/actions";
const FormEditProduct = () => {
  const { products, loading, render } = useSelector(
    (state) => state.formProduct
  );
  const dispatch = useDispatch();
  const route = "/products";
  const history = useHistory();

  const redirect = () => {
    if (!route) return null;
    history.push(`${route}`);
  };

  React.useEffect(() => {
    dispatch(getProduct());
  }, [render, dispatch]);
  const [edit, setEdit] = React.useState({
    active: false,
    name: "",
    product: "",
  });
  const handleBtnDelete = async (p) => {
    // debemos hacer una acción que elimine la categoria
    dispatch(deleteProduct(p.id));
    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
    await redirect();
  };
  const handleBtnEdit = async (p) => {
    // debemos hacer que aparezca un formCategy con un value por default
    setEdit({
      ...edit,
      active: true,
      product: p,
    });
  };
  return (
    <Container
      style={{
        width: "500px",
        padding: "10px",
        marginTop: "20px",
        background: "transparent",
        height: "490px",
        overflow: "auto",
        overflowX: "hidden",
      }}
    >
      {products.length === 0 && !loading ? (
        <h1>Ingrese Productos</h1>
      ) : loading ? (
        <h1> Cargando...</h1>
      ) : !edit.active && products !== "" ? (
        products.map((p) => {
          return (
            <div
              style={{ display: "flex", alingItems: "center" }}
              className="FCselect"
            >
              <Avatar alt="Images" src={p.image} />
              <p style={{ margin: "10px", fontSize: "25px" }}>{p.name}</p>
              <div
                style={{ width: "10%", display: "flex", marginRight: "50px" }}
              >
                <button
                  className="FCbtn"
                  onClick={() => {
                    handleBtnDelete(p);
                  }}
                >
                  <DeleteOutlineOutlinedIcon />
                </button>
                <button
                  className="FCbtn"
                  onClick={() => {
                    handleBtnEdit(p);
                  }}
                >
                  <EditOutlinedIcon />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <FormProduct product={edit.product} />
      )}
    </Container>
  );
};
export default FormEditProduct;
