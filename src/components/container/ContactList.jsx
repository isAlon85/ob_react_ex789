import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/Contact';
import '../../styles/contact.scss'
import Contactform from '../pure/forms/ContactForm';

function ContactListComponent(props) {

    const defaultContact1 = new Contact('Nombre Prueba1', 'email1@obcamp.com', false);
    const defaultContact2 = new Contact('Nombre Prueba2', 'email2@obcamp.com', true);
    const defaultContact3 = new Contact('Nombre Prueba3', 'email3@obcamp.com', false);
    const defaultContact4 = new Contact('Nombre Prueba4', 'email4@obcamp.com', true);
    const defaultContact5 = new Contact('Nombre Prueba5', 'email5@obcamp.com', true);

    // Component status
    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3, defaultContact4, defaultContact5]);
    const [loading, setLoading] = useState(true);

    //lifeCycle control
    useEffect(() => {
        console.log('Contact State has been modified');
        setLoading(false);
        return () => {
            console.log('ContactList component is going to unmount');
        }
    }, [contacts])

    function connectContact(contact){
        console.log('Connect this contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    function deleteContact(contact){
        console.log('Delete this contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    function addContact(contact){
        console.log('Add this contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/*Card header*/}
                    <div className='card-header p-3'>
                        <h5>
                            Your contacts:
                        </h5>
                    </div>
                    {/*Card body*/}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height : '400px'} }>
                        <table>
                            <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                { contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent 
                                            key={index} 
                                            contact={contact}
                                            connect={connectContact}
                                            remove={deleteContact}
                                            >
                                        </ContactComponent>
                                    )
                                } )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Contactform add={addContact}></Contactform>
            </div>
        </div>
    )
}

ContactListComponent.propTypes = {

}

export default ContactListComponent

