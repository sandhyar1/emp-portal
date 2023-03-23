import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Styles/Footer.css"
import {AiFillFacebook,AiFillGithub,AiFillLinkedin,AiFillTwitterCircle,AiFillInstagram,AiFillCodepenCircle} from "react-icons/ai"



function Footer() {
  return (
    <>
    <footer className='fot'>
    <div className="social">
      <p>Follow me on social media</p>
      <ul className="wrapper">
        <NavLink href="#" target="_blank">
          <li className="icon linkedin">
            <span className="tooltip">LinkedIn</span>
            <span><AiFillLinkedin /></span>
          </li>
        </NavLink>
        <NavLink href="#" target="_blank">
          <li className="icon github">
            <span className="tooltip">GitHub</span>
            <span><AiFillGithub /></span>
          </li>
        </NavLink>
        <NavLink href="#" target="_blank">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <span><AiFillFacebook /></span>
          </li>
        </NavLink>
        <NavLink href="#" target="_blank">
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <span><AiFillInstagram /></span>
          </li>
        </NavLink>
        <NavLink href="#" target="_blank">
          <li className="icon twitter">
            <span className="tooltip">Twitter</span>
            <span><AiFillTwitterCircle/></span>
          </li>
        </NavLink>
        <NavLink href="#" target="_blank">
          <li className="icon github">
            <span className="tooltip">CodePen</span>
            <span><AiFillCodepenCircle /></span>
          </li>
        </NavLink>
      </ul>
    </div>
    <div className="final_text">
    <p>@Copyright &copy; All rights reserved Desinged By AndySoftwares</p>
      </div>
    </footer>
    </>
  
  )
  };
export default Footer;