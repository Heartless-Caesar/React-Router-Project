import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Data from './Data';

const List = () => {

  return(
  <>
   <div className="title-div">
     <h1 className="title">List</h1>
   </div>
   {Data.map((item)=>{
       const {id, name, text} = item
       return(
      <div className="item-list-div" key={id}>
       <div className="name-div">
        <h1>{name}</h1>
       </div>
       <div className="text-div">
        <p>{text}</p>
       </div>
       <div className="return-div">
        <Link className="read-more-btn" to={`/item/${item.id}`}>Read More</Link>
      </div>
      </div>
    )}
  )}
   <div className="return-div">
     <Link className="return-btn" to="/">Return Home</Link>
    </div>
  </>
)

}

export default List
