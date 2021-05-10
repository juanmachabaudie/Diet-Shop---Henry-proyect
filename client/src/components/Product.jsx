import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetail } from '../redux/actions/productsActions.js'

const Product = (props) => {

const defaultImg = "https://lh3.googleusercontent.com/proxy/lDX77oEN-GsT0mLlLb6s3Y0sf3-EG9S3dqBV7cOsOrSSJ9_mlEtMb9I-nIj469riZT-Q3EA2N4nP6gzt-iwoSuOR_Fihd8cC"

const dispatch = useDispatch()


function detail2() {
    const id = props.match.params.productId;
    console.log('soy el idddddddddddd '+id)
    dispatch(getProductDetail(id))
}

useEffect(() => {
    detail2();
}, []);

const detail = useSelector(store => store.products.productDetail)
console.log('soy el detalleeeeeeeeeee ' +detail)
    return (
        <div>
            <div className="card" id="product">
                <img class="card-img-top" class="img" src={detail.image || defaultImg} alt="Card image cap" />
                <div class="card-body">
                    <p className="card-text" class="n">
                        {detail.name}
                    </p>
                    <p className="card-text" class="n">
                        {detail.description}
                    </p>
                    <p className="card-text" class="n">
                        {detail.price}
                    </p>
                    <p className="card-text" class="n">
                        {detail.stock}
                    </p>
                    <p className="card-text" class="n">
                        Categorias
                    </p>
                    <div>
                        {detail.categories && detail.categories.length > 0 ? detail.categories.map((a) => {
                            return(
                            <span>{a}</span>
                            )
                        }) : <div> <span>No hay categorias para este producto</span> </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;