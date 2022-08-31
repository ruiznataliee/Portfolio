import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import {AiOutlineContacts} from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
        <a href="#Intro" 
        className='active'><AiOutlineHome/></a>
        <a href="#about"><AiOutlineUser/></a>
        <a href="#product"><AiOutlineFundProjectionScreen/></a>
        <a href="#contact"><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav
