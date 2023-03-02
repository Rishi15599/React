import React, { useState } from 'react';

import Popup from 'react-modal'

import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );

const Popups = ({showPopup,setShowPopup}) => {
    // const [showPopup,setShowPopup] =useState()
console.log("SHOW POP up ",showPopup)    
    return(
      <div>
        <Popup isOpen={showPopup} >
        <h1>YOU have successfully submitted your form </h1>
        <button onClick={() => setShowPopup(false)}>Cancel</button>
        </Popup>
      </div>
    );
    // event.preventDefault();
    // return(<p>hellow Zindagi</p>)
}


export default Popups