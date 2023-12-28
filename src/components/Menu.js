import React from 'react';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

function Menu() {

const [resInfo,setresInfo]= useState(null);


    useEffect(() => {
    fetchMenu();
     },[]);

     const fetchMenu = async () => {
        const data = await fetch(
          "https://www.eatsure.com/v1/api/get_all_products/brand_id/20/store_id/10358/source_id/2"
        );
        const json = await data.json();

        console.log(json);
        setresInfo(json.data); 
    }; 
    if(resInfo=== null)return <Shimmer /> ;
    
    const{product_imageUrl,product_name,small_description}=resInfo?.collections[0]?.products[0];
    const {products}=resInfo?.collections[0];

  return(
    <div className='menu-card'>
      <h1>Menu</h1>
        <ul className='view'>{products.map((product) =>(
           <li className='menu-list'><img className='menu-image' src={product.product_imageUrl} /> <br />{product.product_name} - {product.price} <br /> {product.small_description}</li>
        ))}</ul>
    </div>
  )
}

export default Menu;