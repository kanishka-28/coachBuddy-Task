import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
const signup = () => {
    const submit=(e)=>{
        e.preventDefault();
        console.log("response submitted");
    }
    
    return (
        <div className="mainContainer">
        <div className="formContainer">
            <form onSubmit={submit} >
                    <h1 className='heading'>Get started</h1>
                    <div className='input-field' >
                        <label htmlFor="fName">FIRST NAME</label>
                        <input required type="text" className='input' id='fName' />
                    </div>
                    <div className='input-field' >
                        <label htmlFor="lName">LAST NAME</label>
                        <input required type="text" className='input' id='lName' />
                    </div>
                    <div className='input-field' >
                        <label htmlFor="Email">EMAIL ID</label>
                        <input required type="email" className='input' id='Email' />
                    </div>
                    <div className='input-field' >
                        <label htmlFor="mobileNumber">MOBILE NUMBER</label>
                        <input required type="tel" className='input' id='mobileNumber' />
                    </div>
                    <div className='input-field' >
                        <label htmlFor="passWord">PASSWORD</label>
                        <input required type="password" className='input' id='passWord' />
                    </div>
                    <div className='input-field' >
                        <label htmlFor="confirmPassWord">CONFIRM PASSWORD</label>
                        <input required type="password" className='input' id='confirmPassWord' />
                    </div>
                    <div className='submit-response' >
                            <button type='submit' className='btn' >
                                SIGN UP
                            </button>
                            <Link to="/login" className='btn' >
                                ALREADY REGISTERED? LOG IN
                            </Link>
                    </div>
            </form>
        </div>
        <Sidebar/>
    </div>
    )
}

export default signup