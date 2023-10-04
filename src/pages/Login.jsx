

function Login() {

    


    return (
        <div className={'w-screen h-screen text-amber-50 flex justify-center items-center'} >
            <div className={'w-[400px] overflow-hidden h-[400px] rounded-3xl border-gray-500 bg-blue-400 '} >
                <div className={'flex justify-center items-center text-amber-50 font-bold h-[20%] '}>Login</div>
                <div className={' flex flex-col h-[80%] justify-center items-center '}>
                    <div className={' flex flex-col justify-center items-start pl-[30%] w-full h-[30%]'} >
                        <label>Email</label>
                        <input className={'bg-blue-400 border-b-2 text-amber-50 outline-0 '}/>
                    </div>
                    <div className={' flex flex-col justify-start items-start pl-[30%] w-full h-[30%]'}>
                        <label>Password</label>
                        <input className={'bg-blue-400 border-b-2 text-amber-50 outline-0'} type={"password"}/>

                    </div>
                    <button className={'bg-gray-800 w-[50%] p-2 rounded-3xl'} > Login </button>
                </div>
            </div>
        </div>
    );
}

export default Login;