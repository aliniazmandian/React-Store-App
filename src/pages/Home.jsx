import Layout from "../layout/Layout.jsx";
import {useRqProductFetcher} from "../Hooks/react-query/useRqProductFetcher.js";


function Home() {

const onSuccess = (data)=>{
    console.log(data)
}

 const  {isLoading,data,isError,error,refetch} =   useRqProductFetcher(0,onSuccess)


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
                       return <section key={product.id} >
                           <section>
                               <div>
                                   <img className={''} src={product.image} alt={product.name} />
                               </div>
                               <div>
                                   <p>{product.name}</p>
                                   <p>{product.price}</p>
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