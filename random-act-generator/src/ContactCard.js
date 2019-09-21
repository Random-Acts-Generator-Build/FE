import React, { useState } from 'react';
import { Card, Button } from 'semantic-ui-react'

let newContact = {};

function ContactCard() {
    
    const [placeholder, placeholder2] = useState(newContact);
    return (
        <div>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Name of Contact</Card.Header>
                        <Card.Meta>Phone Number</Card.Meta>
                        <Card.Description>You have done X random acts of kindness for them</Card.Description>
                        <Card.Description extra>They have done X random acts of kindness for you</Card.Description>
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