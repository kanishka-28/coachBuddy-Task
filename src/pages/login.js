import React from 'react'
import Sidebar from '../components/Sidebar'
import './index.css'
const login = () => {
    const submit=(e)=>{
        e.preventDefault();
        console.log("response submitted");
    }
    return (
        <div className="mainContainer">
            <div className="formContainer">
            <form onSubmit={submit} >
                    <h1 className='heading'>Welcome Back !</h1>
                    <div className='input-field' >
                        <label htmlFor="fName">FIRST NAME</label>
                        <input type="text" className='input' id='fName' />
                    </div>
                    <div className='input-field' >
                        <label htmlFor="lName">LAST NAME</label>
                        <input type="text" className='input' id='lName' />
                    </div>
                    <div className="btnDiv">
                        <button className="btn">LOG IN</button>
                        <button className="btn">FORGOT PASSWORD</button>
                    </div>
                    <button className="btn">LOGIN USING OTP</button>
            </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default login

