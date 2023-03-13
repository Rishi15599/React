import "./Sign_in.css"
import React from "react"

function Sign_in(){
    return(
        <div>
            <form action="">
                <label htmlFor="">Email_Id : </label>
                <input placeholder="Please Enter your email" required type="email" name="" id="" />
                <br /><br />
                <label htmlFor="">Password : </label>
                <input placeholder="Please Enter your password" type="password" name="" id="" />
                <br /><br />
                <input type="reset" value=" Reset   " />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Sign_in