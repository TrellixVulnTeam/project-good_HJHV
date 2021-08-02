import React, { useState } from 'react';
import './Login.scss';
import SignUp from './SignUp'
import SignIn from './SignIn'
import {setLogin}from '../../store/actions/home'
import { connect } from "react-redux";

const Login = (props) => {
  // const [isOpen, setIsOpen] = useState(true);
  
  const [show, setShow] = useState(<SignIn />);
  // const myRef = React.createRef();

/*
  const openModal = () => {
    setIsOpen(true);
    // myRef.current.style.display = "block";
  }
  const closeModal = () => {
    setIsOpen(false);
    // myRef.current.style.display = "none";
  }*/
  const signInShow = (e) => {
    setShow(<SignIn/>);
  } 
   const signUpShow = (e) => {
     setShow(<SignUp/>);
  }
  const click=(e)=>{
    e.stopPropagation();
  }
  return (
    <center>
      <div id="myModal" className="modal glass" onClick={()=>props.setLogin(false)} >
        <div className="modal-content"  onClick={click}>
          <div className="btn" id="btn_signin" onClick={signInShow} >SIGN IN</div>
          <div className="btn" id="btn_signup" onClick={ signUpShow}>SIGN UP</div>
          <div id="login_top" >
            {show}
          </div>
          <div id="login_bottom"></div>
          {/* REGISTER */}
        </div>
      </div>
    </center>
  );
}

const mapStateToProps = (state) => {
  return {
      
  };
}
export default connect(mapStateToProps,{setLogin})( Login);
