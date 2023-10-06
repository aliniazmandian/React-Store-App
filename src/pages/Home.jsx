import Layout from "../layout/Layout.jsx";
import {useRqProductFetcher} from "../Hooks/react-query/useRqProductFetcher.js";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../Features/Cart/cartSlice.js";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {getProducts} from "../Features/Products/products.js";


function Home() {

    const dispatch = useDispatch()

 const  {isLoading,data,isError,error,refetch} =   useRqProductFetcher(0)


    useEffect(()=>{
        if(!isLoading && !isError  ){
            dispatch(getProducts(data?.data))
        }
    },[isLoading])

     const addToCartHandler = (product)=>{
         // console.log(product)
         // console.log(cart)
         dispatch(addToCart(product))
     }


    if (isLoading){
        return <h2>Loading . . .</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }


    return (
       <Layout>
           <main>
               <section className={'grid grid-cols-16 gap-5 '}  >
                   {data?.data.map((product)=>{
                       return <section className={'mt-5'} key={product.id} >

                           <section className={'w-full rounded-2xl overflow-hidden max-w-md bg-black '}>
                               <div>
                                   <Link to={`/product?productId=${product.id}`}>
                                       <img className={''} src={product.image} alt={product.name} />
                                   </Link>
                               </div>
                               <div className={'flex w-full'} >
                                   <div className={'bg-blue-300 w-full pl-2'} >
                                       <p>Name: {product.name}</p>
                                       <p>Price: {product.price}$</p>
                                   </div>
                                   <button
                                       className={'bg-blue-400 hover:bg-gray-700 active:bg-blue-50 '}
                                       onClick={()=>addToCartHandler(product)}
                                   >Add to cart
                                   </button>
                               </div>
                           </section>

                              </section>

                   })
                   }
               </section>
           </main>
       </Layout>
    );
}

export default Home;