
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";


function Product() {

    const products = useSelector(state => state.products.value)

    const [searchParams,setSearchParams] = useSearchParams()
    const productId = searchParams.get('productId')
    const showProduct = products.filter((product)=>{
        return product.id === +productId
    })

    return (
        <div>
            {showProduct[0].name}
        </div>
    );
}

export default Product;