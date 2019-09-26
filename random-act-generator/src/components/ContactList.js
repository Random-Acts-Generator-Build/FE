import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

function ContactList(props) {
    const newContact = {};
    const [contacts, setContacts] = useState(newContact);
    const myContactList = [
        {
            id: 0,
            name: 'John Smith',
            phone: '513-111-2222',
            actsForThem: 2,
            actsForMe: 0
        }, 
        {
            id: 1,
            name: 'John Smith2',
            phone: '513-111-2222',
            actsForThem: 2,
            actsForMe: 0
        },
        {
            id: 2,
            name: 'John Smith3',
            phone: '513-111-2222',
            actsForThem: 2,
            actsForMe: 0
        }
    ];
    return (
        <div>
            <ContactForm />
            <h1>Contacts</h1>
            <div>
            {myContactList.map(contact => (
                <ContactCard 
                    key={contact.id} 
                    phone={contact.phone} 
                    name={contact.name} 
                    actsForThem={contact.actsForThem}
                    actsForMe={contact.actsForMe}
                />
      ))}
            </div>
        </div>
    )
}

export default ContactList;
