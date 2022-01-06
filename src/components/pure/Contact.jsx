import React, { useEffect} from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactComponent({ contact }) {

    useEffect(() => {
        console.log('Contact Created');
        return () => {
            console.log(`Contact  ${contact.name} is going to unmount`);
        }
    }, [contact])

    return (
        <div>
            <h2>Name: { contact.name }</h2>
            <h2>Email: { contact.email }</h2>
            <h2>Connected: { contact.connected ? 'Connected' : 'Not connected' }</h2>
        </div>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent