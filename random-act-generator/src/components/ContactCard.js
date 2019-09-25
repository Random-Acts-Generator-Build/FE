import React, { useState } from 'react';
import { Button, Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


function ContactCard(props) {
    const newContact = {};
    const [placeholder, placeholder2] = useState(newContact); 
    return (
        <div>
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
                            <Button basic color='green'>Suprise them!</Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}

export default ContactCard;