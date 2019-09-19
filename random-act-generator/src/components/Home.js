import React from "react";
import ModalModalExample from './Login';


export default function Home() {
  return (
      <>
    <section className="home-page">
      <header>
        <h1>Random Act Generator</h1>
        <img
          className="main-img ui centered medium circular image"
          src="https://live.staticflickr.com/4605/39576557355_166b512015_m.jpg"
          alt="Kindness Starts With You"
        />
      </header>
    </section>
    
    {/* {Modal Section} */}
    
    <ModalModalExample />
    </>
  );
}