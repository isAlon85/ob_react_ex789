import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/Contact';

function ContactListComponent(props) {

    const defaultContact = new Contact('Nombre Prueba', 'email@obcamp.com', false);

    // Component status
    const [contacts, setContacts] = useState(defaultContact);
    const [loading, setLoading] = useState(true);

    //lifeCycle control
    useEffect(() => {
        console.log('Contact State has been modified');
        setLoading(false);
        return () => {
            console.log('ContactList component is going to unmount');
        }
    }, [contacts])

    const changeConnected = (id) => {
        console.log('TODO');
    }

    return (
        <div>
            <div>
                <h1>Your contacts:</h1>
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent> 
        </div>
    )
}

ContactListComponent.propTypes = {

}

export default ContactListComponent

