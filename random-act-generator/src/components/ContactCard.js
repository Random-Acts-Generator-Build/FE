import React, { useEffect, useState } from "react";
import { Button, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import axios from 'axios';


const CardDiv = styled.div`
  width: 400px;
  border: 2px solid #cb8b41;
  border-radius: 10px;
  background-color: #99b3af;
  text-align: center;
  margin: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

function ContactCard(props) {
    const [acts, setActs] = useState([]);
    
    
    useEffect(() => {
       
            axios
                .get('https://generate-random-acts.herokuapp.com/api/acts')
                .then(response => {
                    setActs(response.data);
                })
                .catch(error => {
                    console.error('Server Error', error);
                })
        }
    , []);

    let randomAct = acts[Math.ceil(Math.random() * acts.length)] || {act_name:""};
    console.log (randomAct);

    
    function handleClick() {
        alert(`Surprise ${props.name} with ${randomAct.act_name}`);
        }
    return (
        <CardDiv>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>{props.name}</Card.Header>
                        <Card.Meta>{props.number}</Card.Meta>
                        <Card.Description>{`You have done ${props.actsForThem} random acts of kindness for them`}</Card.Description>
                        <Card.Description extra>{`They have done ${props.actsForMe} random acts of kindness for me`}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui one button'>
                        <Button onClick={handleClick}>Suprise them!</Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </CardDiv>
    )
}

export default ContactCard;