import Layout from "../layout/Layout.jsx";
import {useRqProductFetcher} from "../Hooks/react-query/useRqProductFetcher.js";


function Home() {


 const  {isLoading,data,isError,error,refetch} =   useRqProductFetcher(0)

     const addToCartHandler = (productId)=>{
         console.log(productId)
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
                                   <img className={''} src={product.image} alt={product.name} />
                               </div>
                               <div className={'flex w-full'} >
                                   <div className={'bg-blue-300 w-full pl-2'} >
                                       <p>Name: {product.name}</p>
                                       <p>Price: {product.price}$</p>
                                   </div>
                                   <button
                                       className={'bg-blue-400 hover:bg-gray-700 active:bg-blue-50 '}
                                       onClick={()=>addToCartHandler(product.id)}
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