import React,{useState, useEffect} from 'react';
import { Link ,useParams } from 'react-router-dom';
import Data from './Data';
import './index.css';

const Item = () => {
    const[name, setName] = useState('Default Name');
    const { id } = useParams();

    useEffect(() => {
        const newItem = Data.find((item) => item.id === parseInt(id))
        setName(newItem.name)
    }, [])

    return(
        <>
         <div className="title-div">
          <h1 className='title'>{name}</h1>
         </div>
         <div className="return-btn-div">
          <Link className="return-btn" to="/List">Return</Link>
         </div>
        </>
    )
}

export default Item
