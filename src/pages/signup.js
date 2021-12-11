import React from 'react'
import Sidebar from '../components/Sidebar'

const signup = () => {
    const submit=()=>{
        console.log("response submitted");
    }
    return (
        <div className="mainContainer">
        <div className="formContainer">
            <form onSubmit={submit} >
                    <h1 className='heading'>Get started</h1>
                    <div className='input-field' >
                        <label htmlFor="fName">EMAIL ID</label>
                        <input type="text" className='input' id='fName' />

                    </div>
                    <div className='input-field' >
                        <label htmlFor="lName">PASSWORD</label>
                        <input type="text" className='input' id='lName' />

                    </div>
            </form>
        </div>
        <Sidebar/>
    </div>
    )
}

export default signup