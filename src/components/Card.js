import React from 'react';
import { Link } from 'react-router-dom';


function Card(props) {
  const { resData } = props;
  return (
  
    <div >
        <div className="product-card">
            <div className="product-image ">
                <Link to="/restaurant/1232"><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
              resData.info.cloudinaryImageId } alt='prod'   /></Link>
            </div>
            <div className="product-details">
             <h3>{resData.info.name}</h3>
             
             <h4>{resData.info.cuisines} </h4>
              <h4>{resData.info.avgRating}</h4>
              <h4>{resData.info.costForTwo}</h4>
            </div>
        </div>
    </div>
  )
}

export default Card;