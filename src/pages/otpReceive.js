import React from 'react'
import BottomLine from '../components/bottomLine';
import Sidebar from '../components/Sidebar';

const otpReceive = () => {
    const submit=()=>{
        console.log("response submitted");
    }
    return (
        <div className="mainContainer">
            <div className="formContainer">
            <form onSubmit={submit} >
                    <h1 className='heading'>Welcome Back !</h1>
                    <BottomLine/>
                    <div className='input-field' >
                        <label htmlFor="fName">MOBILE NO.</label>
                        <input type="text" className='input' id='fName' />
                    </div>
                    <div className='input-field' >
                        <label htmlFor="lName">OTP</label>
                        <input type="text" className='input' id='lName' />
                    </div>
                    <div className="btnDiv">
                        <button className="btn">LOG IN</button>
                        <button className="btn">RESEND OTP</button>
                    </div>
            </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default otpReceive
