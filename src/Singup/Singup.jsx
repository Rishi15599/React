import React, { useState } from 'react';

import "./Singup.css"
import ReactDOM from 'react-dom/client';
import Popup from '../Popup/popup'


export default function Singup()  {

    const [user, setUser] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNo: '',
        Gender: '',
        DOB: ''
    });
    const handleInputs= (e) =>{
        console.log(e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
          })
    }

    
    const [showPopup,setShowPopup] =useState(false)

     function handleSubmit (e)  {
        console.log("Handling submit=>>>>>>>>>>>>>>",user)
        e.preventDefault();
        setShowPopup    (true) // main
        console.log("Handling submit=>>>>>>>>>>>>>>",showPopup)

    }
    
   
    return (
        <div>
            <form action="" className='form1'>
                <br /><br />
                <label htmlFor="">First Name : </label>
                <input name="FirstName" type="text" placeholder='Please Enter your first name' value={user.FirstName} onChange={handleInputs} required/>
                <br /><br />
                <label htmlFor="">Last Name : </label>
                <input name="LastName" type="text" placeholder='Please Enter your last name' value={user.LastName} onChange={handleInputs} required/>
                <br /><br />
                <label htmlFor="">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                <input name="Email" type="email" id="" placeholder='Please Enter your email' value={user.Email} onChange={handleInputs} required/>
                <br /><br />
                <label htmlFor="">Phone No &nbsp;&nbsp;: </label>
                <input type="tel" name="PhoneNo" id=""  placeholder='Please Enter your phone' value={user.PhoneNo} onChange={handleInputs} required/>
                <br /><br />
                <label htmlFor="">Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                <select name="Gender" id="" value={user.Gender} onChange={handleInputs} required>
                    <option value="Select">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br /><br />
                <label htmlFor="">DOB &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                <input type="date" name="DOB" id="" value={user.DOB} onChange={handleInputs}  required/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br /><br />
                <input type="reset" value=" Reset   " />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={handleSubmit}>Button</button>
               
                <br />
            </form>
            <Popup showPopup={showPopup} setShowPopup={setShowPopup} userData={user}/>
        </div>
    )

}
