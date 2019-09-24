import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';

function ContactList(props) {
    const newContact = {};
    const [placeholder, placeholder2] = useState(newContact);
    const myContactList = [
        {
            id: 0,
            name: 'John Smith',
            phone: '513-111-2222',
            actsForThem: 2,
            actsForMe: 0
        }
    ];
    return (
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
    )
}

export default ContactList;
