import "./Contact.css"
import React from "react"

function Contact(){
    return(
        <div>
            <div>
                {/* <span><img src="" alt="" /></span> */}
                <span><p><a href="">rishi1400144@gmail.com</a></p></span>
            </div>
            <div>
                {/* <span><img src="" alt="" /></span> */}
                <span><a href="">+91-8271402611</a></span>
            </div>
            <div>
                <br />
                <br />
                <form action="">
                    <label htmlFor="">Comment :</label>
                    <br /><br />
                    <textarea name="" id="" cols="60" rows="8" required placeholder="Any Comment"></textarea>
                    <br />
                    <input type="submit" value="Submit" />

                </form>
            </div>
        </div>
    )
}
export default Contact