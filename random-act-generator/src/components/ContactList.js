import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import axios from 'axios';
import styled from 'styled-components';

const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HeaderDiv = styled.div`
    margin: 50px;
`;


function ContactList() {
    const [contacts, setContacts] = useState([]);
    
    
    useEffect(() => {
        const getContacts = () => {
            axios
            .get('https://generate-random-acts.herokuapp.com/api/users/3/contacts')
            .then(response => {
                console.log(response);
                setContacts(response.data);
            })
            .catch(error => {
                console.error('Server Error', error);
            })
        }
            getContacts();
    }, []);

    return (
        <div>
            <HeaderDiv><h1>Contacts</h1>
            </HeaderDiv>
            <CardsDiv>
            {contacts.map(contact => (
                <ContactCard 
                    key={contacts.indexOf(contact)} 
                    phone={contact.phone_number} 
                    name={contact.contact_name} 
                    actsForThem={Math.floor(Math.random()*100%10)}
                    actsForMe={Math.floor(Math.random()*100%10)}
                />
      ))}
            </CardsDiv>
            <ContactForm />
        </div>
    )
}

export default ContactList;
