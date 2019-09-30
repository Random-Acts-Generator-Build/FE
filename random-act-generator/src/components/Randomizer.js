import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import TabNav from "./TabNav";

const RandomDiv = styled.div`
  width: 500px;
  margin-left:33%;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #99b3af;
  text-align: center;
  margin-bottom: 20px;
  color: #cb8b41;
  margin-top: 20px;
`;

export default function Randomizer () {
    const [acts, setActs] = useState([]);
    const [contacts, setContacts] = useState([]);
    
    
    useEffect(() => {
       
            axios
                .get('https://generate-random-acts.herokuapp.com/api/acts')
                .then(response => {
                    setActs(response.data);
                })
                .catch(error => {
                    console.error('Server Error', error);
                })
        
            axios
                .get('https://generate-random-acts.herokuapp.com/api/users/2/contacts')
                .then(response => {
                    setContacts(response.data);
                })
                .catch(error => {
                    console.error('Server Error', error);
                })
        }
    , []);


    let randomContact = contacts[Math.ceil(Math.random() * (contacts.length-1))] || {contact_name:""};
    console.log (randomContact);

    let randomAct = acts[Math.ceil(Math.random() * (acts.length-1))] || {act_name:""};
    console.log (randomAct);

    return (
        <div>
        <TabNav />
        <RandomDiv><h1>Act: {randomAct.act_name}</h1><br></br>
        <h1>Contact: {randomContact.contact_name}</h1><br></br>
        <h2>Phone number: {randomContact.phone_number} </h2></RandomDiv>
        </div>
    )
}