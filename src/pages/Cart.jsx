import Layout from "../layout/Layout.jsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

function Cart() {

    const cart = useSelector((state)=>state.cart.value)
    const [totalPrice,setTotalPrice]=useState(0)
    // console.log(cart)
    useEffect(()=>{
        if(cart.length !== 0){
            const updateTotalPrice = cart?.reduce((a,b)=>{

                return a +( b.price * b.quantity)
            },0)
            setTotalPrice(updateTotalPrice)
        }

    },[cart])


    if(cart.length === 0){
        return <Layout>
            <div className={'text-amber-50'} > cart is empty</div>
        </Layout>

    }

    return (
        <Layout>
            <div className={'text-amber-50'}>
                {cart.map((item)=>{
                    return <div  key={item.id} > Name: {item.name} - Price: {item.price}$ - Quantity: {item.quantity} </div>
                })}
                <div>total price: ${new Intl.NumberFormat("en-IN").format(totalPrice)}</div>
            </div>
        </Layout>

    );
}

export default Cart;