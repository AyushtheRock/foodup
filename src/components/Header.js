import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


let btnOld = "Login";
let btnNew ="Logout";

function Header() {

  const [btnText,setbtnText] = useState(btnOld);




  return (
    <div className='heading'>
        <img className='Logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGB-IZSMaoZjSlROEhV8QfX4hddE7lzVeW7tfpqgiNZR-hCtGORFFHskBlpFYin-cuDKI&usqp=CAU"></img>
        
        <h1 className='head-text'>Let's Eat some Yummmy ...<i className='bx bx-bowl-hot'></i></h1>
        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
            <button className='btn-h' onClick={() => {
             btnText === "Login"? setbtnText(btnNew): setbtnText(btnOld);

            }}
            >{btnText}</button>
        </ul>
    </div>
  )
}

export default Header;