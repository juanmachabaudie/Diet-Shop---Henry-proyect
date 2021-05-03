import React from "react";
import "./Dashboard.css";
import FormCategory from "../../components/form/formCategory/FormCategory";
import FormProduct from "../../components/form/formProduct/FormProduct";
import FormEditCategory from "../../components/form/formEditCategory/FormEditCategory";
import FormEditProduct from "../../components/form/formEditProduct/FormEditProduct";
import { AdminPromoter } from '../../components/index';
import { useSelector, useDispatch } from "react-redux";
import { flowRender } from "../../redux/actions";
const Dashboard = () => {
  const { work } = useSelector((state) => state.formCategories);
  const { works } = useSelector((state) => state.formProduct);

  const dispatch = useDispatch();
  // Efecto de boton aparece el input
  const [btn, setBtn] = React.useState({
    activeCategories: false,
    activeProducts: false,
    activeEditProduct: false,
    activeEditCategories: false,
    activeNothingCategories: true,
    activeNothingProduct: true,
    activeEditAdmins: false
  });
  const handleClick = (v) => {
    dispatch(flowRender("dashboardPostForm"));
    setBtn({
      ...btn,
      activeProducts: true,
      activeNothingProduct: false,
    });
  };
  const handleClickOne = () => {
    dispatch(flowRender("dashboardPost"));
    setBtn({
      ...btn,
      activeCategories: true,
      activeNothingCategories: false,
    });
  };
  const handleClickEditOne = () => {
    dispatch(flowRender("dashboardPut"));
    setBtn({
      ...btn,
      activeEditCategories: true,
      activeNothingCategories: false,
    });
  };
  const handleClickFacha = () => {
    setBtn({
      ...btn,
      activeNothingCategories: false,
      activeEditAdmins: true
    });
  }
  const handleClickEditTwo = () => {
    dispatch(flowRender("dashboardPutForm"));
    setBtn({
      ...btn,
      activeEditProduct: true,
      activeNothingProduct: false,
    });
  };
  const handleClickCancel = () => {
    setBtn({
      activeCategories: false,
      activeProducts: false,
      activeEditProduct: false,
      activeEditCategories: false,
      activeNothingCategories: true,
      activeNothingProduct: true,
    });
  };
  return (
    <div className="containerDash" onDoubleClick={handleClickCancel}>
      <div className="NavFalse"></div>
      <div className="formCategoryDash">
        {btn.activeNothingCategories ? (
          <>
            <div className="btnFormDashOne" onClick={handleClickOne}>
              <h1>Crear Categoría</h1>
            </div>
            <div className="btnFormDashOne" onClick={handleClickEditOne}>
              <h1>Editar Categoría</h1>
            </div>
            <div className="btnFormDashOne" onClick={handleClickFacha}>
              <h1>Agregar/Quitar Administradores</h1>
            </div>
          </>
        ) : btn.activeCategories && work === "emptyPOST" ? (
          <FormCategory />
        ) : btn.activeEditCategories && work === "emptyPUT" ? (
          <FormEditCategory />
        )
          : btn.activeEditAdmins ? (
            <AdminPromoter />
        ) : (
          <>
            <div className="btnFormDashOne" onClick={handleClickOne}>
              <h1>Crear Categoría</h1>
            </div>
            <div className="btnFormDashOne" onClick={handleClickEditOne}>
              <h1>Editar Categoría</h1>
            </div>
          </>
        )}
      </div>
      <div className="formProductDash">
        {btn.activeNothingProduct ? (
          <>
            <div className="btnFormDash" onClick={handleClick}>
              <h1>Crear Producto</h1>
            </div>
            <div className="btnFormDash" onClick={handleClickEditTwo}>
              <h1>Editar productos</h1>
            </div>
          </>
        ) : btn.activeProducts && works === "emptyPOST_PRODUCT" ? (
          <FormProduct />
        ) : btn.activeEditProduct && works === "emptyPUT_PRODUCT" ? (
          <FormEditProduct />
        ) : (
          <>
            <div className="btnFormDash" onClick={handleClick}>
              <h1>Crear Producto</h1>
            </div>
            <div className="btnFormDash" onClick={handleClickEditTwo}>
              <h1>Editar productos</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
