import React, { useEffect} from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactComponent({ contact, connect, remove }) {

    useEffect(() => {
        console.log('Contact Created');
        return () => {
            console.log(`Contact  ${contact.name} is going to unmount`);
        }
    }, [contact])

    function taskCompletedIcon(){
        if(contact.connected){
            return (<i onClick={ () => connect(contact)} className='bi-toggle-on contact-action' style={ {color: 'green'} }></i>);
        } else {
            return (<i onClick={ () => connect(contact)} className='bi-toggle-off contact-action' style={ {color: 'grey'} }></i>);
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ contact.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ contact.email }</span>
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
                <i onClick={ () => remove(contact)} className='bi-trash contact-action' style={ {color: 'red'} }></i>
            </td>
        </tr>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default ContactComponent