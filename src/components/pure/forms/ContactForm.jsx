import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contact.class';

const Contactform = ( {add, length} ) => {

    const nameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            emailRef.current.value,
            false,
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='ContactName'/>
                <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='ContactEmail'/>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Add New Contact' : 'Create Your First Contact'}
                </button>
            </div>
       </form>
    );
}

Contactform.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Contactform;
