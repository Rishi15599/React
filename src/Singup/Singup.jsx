import React, { useState } from 'react';

import "./Singup.css"
import ReactDOM from 'react-dom/client';
import Popup from '../Popup/popup'

// const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );

//   function Popups(event){
//     console.log("Inside pop up")

//     // root.render(
//     //   <div>
//     //     {/* <button type="button" className="button" onClick={() => setOpen(o => !o)}>
//     //       Controlled Popup
//     //     </button> */}
//     //     <Popup open={1} >
//     //       <div className="modal">
//     //         <a className="close" >
//     //           &times;
//     //         </a>
//     //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
//     //         omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
//     //         ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
//     //         doloribus. Odit, aut.
//     //       </div>
//     //     </Popup>
//     //   </div>
//     // );
//     event.preventDefault();
//     return(<p>hellow Zindagi</p>)
    
//     // return(
//     //     <Popup  open={true}  modal>
//     //     <span> Modal content </span>
//     //   </Popup>
//     // );
//     // return(
//     //     <Popup trigger={<button> Trigger</button>} position="right center">
//     //     <div>Popup content here !!</div>
//     //   </Popup>
//     // )    
// }
// const [showPopup] =useState(false)

export default function Singup()  {
    const [showPopup,setShowPopup] =useState(false)


     function handleSubmit (e)  {
        console.log("Handling submit=>>>>>>>>>>>>>>")
        e.preventDefault();
        setShowPopup    (true) // main
        console.log("Handling submit=>>>>>>>>>>>>>>",showPopup)

    }
    // const ExpenseForm = () =>{
        
    // };

    // const submitForm = (event) => {
    //     event.preventDefault();
    // };
   
    return (
        <div>
            <form action="" className='form1'>
                <br /><br />
                <label htmlFor="">First Name : </label>
                <input type="text" placeholder='Please Enter your first name' required/>
                <br /><br />
                <label htmlFor="">Last Name : </label>
                <input type="text" placeholder='Please Enter your last name' required/>
                <br /><br />
                <label htmlFor="">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                <input type="email" name="" id="" placeholder='Please Enter your email' required/>
                <br /><br />
                <label htmlFor="">Phone No &nbsp;&nbsp;: </label>
                <input type="tel" name="" id=""  placeholder='Please Enter your phone' required/>
                <br /><br />
                <label htmlFor="">Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                <select name="" id="" required>
                    <option value="Select">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br /><br />
                <label htmlFor="">DOB &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                <input type="date" name="" id=""  required/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br /><br />
                <input type="reset" value=" Reset   " />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={handleSubmit}
                >Button</button>
               
                <br />
            </form>
            <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
            
            {/* <Popup showMsg = {this.state.showMsg} /> */}
        </div>
    )

}
