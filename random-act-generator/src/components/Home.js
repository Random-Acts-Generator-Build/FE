import React, { Component } from "react";
import { NavLink, Link, Route } from "react-router-dom";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ModalModalExample from './Login';
import RegistrationForm from './Register';
import LoginForm from './Login';



export default function Home() {
  return (
      <>
    <section className="home-page" style={{background:"#99b3af", padding:"20px"}}>
      
      <header>
        <h1 style={{fontFamily:"Quicksand", color:"#fff"}}>Random Act Generator</h1>
        <img
          className="main-img ui centered medium circular image"
          src="https://i.ibb.co/7KChYnP/kids.jpg"
          alt="Kindness Starts With You"
        />
      </header>

      <div style={{marginTop:'25px', background:"#99b3af", padding:"20px"}}>
      
      <Route path='/' render={props => <LoginForm {...props} />} />
        
      <Route path='/' render={props => <RegistrationForm {...props} /> } />

      </div>

    </section>
    
   
    
    </>
  );
}