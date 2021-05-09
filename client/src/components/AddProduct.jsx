import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCategories,
  postProduct,
} from "../redux/actions/productsActions.js";
import Style from "../componentsCss/AddProduct.module.css";

export default function AddProduct() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const categories = store.products.categories;
  const loading = store.products.loading;
  const agregado = store.products.message;

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const [cate, setc] = useState([]);
  const [datos, setDatos] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    categories: [],
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleCat = (event) => {
    event.preventDefault();
    const options = event.target.options;
    const seleccionadas = [];
    for (let option of options) {
      if (option.selected) {
        seleccionadas.push(option.value);
      }
    }
    setDatos({
        ...datos,
        categories: seleccionadas
    })
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    dispatch(postProduct(datos));
  };

  if (loading) {
    return (
      <div>
        <h1> LOADING... </h1>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={enviarDatos}>
          <div className={Style.container}>
            <section className={Style.section}>
              <input
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={handleInputChange}
              />
            </section>
            <section className={Style.section}>
              <input
                type="text"
                placeholder="Descripción"
                name="description"
                onChange={handleInputChange}
              />
            </section>
            <section className={Style.section}>
              $
              <input
                type="number"
                placeholder="Precio"
                name="price"
                onChange={handleInputChange}
              />
            </section>
            <section className={Style.section}>
              <input
                type="number"
                placeholder="Stock"
                name="stock"
                onChange={handleInputChange}
              />
            </section>
          </div>
          <div>
            <label for="mainPic">Imagenes del Producto:</label>
            <input
              type="file"
              id="mainPic"
              name="mainPic"
              accept="image/jpeg"
            />
          </div>
          <select multiple name="categories" onChange={handleCat} required>
            {categories?.map((each) => {
              return (
                <option value={each.name} key={each.uuid}>
                  {each.name}
                </option>
              );
            })}
          </select>
          <input type="submit" value="Agregar" />
          <div>{agregado.message}</div>
        </form>
      </div>
    );
  }
}
