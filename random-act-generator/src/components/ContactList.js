import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import axios from 'axios';


function ContactList() {
    const [contacts, setContacts] = useState([]);
    
    
    useEffect(() => {
        const getContacts = () => {
            axios
            .get('https://generate-random-acts.herokuapp.com/api/users/1/contacts')
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
            <ContactForm />
            <h1>Contacts</h1>
            <div>
            {contacts.map(contact => (
                <ContactCard 
                    key={contacts.indexOf(contact)} 
                    phone={contact.phone_number} 
                    name={contact.contact_name} 
                    actsForThem={Math.floor(Math.random()*100%10)}
                    actsForMe={Math.floor(Math.random()*100%10)}
                />
      ))}
            </div>
        </div>
    )
}

export default ContactList;
