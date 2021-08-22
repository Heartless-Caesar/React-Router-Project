import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return(
   <>
    <div className="title-div">
     <h1 className="title">Page not found</h1>
    </div>
    <div className="return-div">
     <Link className="return-btn" to="/">Return Home</Link>
    </div>
   </>
  )
}

export default Error
