import React from 'react';
import MdPhoneAndroid from 'react-icons/lib/md/phone-android';
import MdLocationOn from 'react-icons/lib/md/location-on';
import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaInstagram from 'react-icons/lib/fa/instagram';
import './Contact.css';
import {reduxForm, Form} from 'redux-form';
import {FormInputField, FormTextArea} from './../Form/FormInputs';
import {empty, minLength, emailFormat} from './../Form/Validator';
import Spinner from '../BasicComponents/Spinner/Spinner';
import Divider from '../BasicComponents/Divider/Divider';

const Contact = ({handleSubmit, onSubmit, submitting, submitSucceeded}) =>
    <div className="Contact">
        <div className="contact-wrapper">
            {submitSucceeded ?
                <div className="contact-form-success">
                    <p className="contact-form-success-message">
                        Thank you for your message!
                    </p>
                    <p className="contact-form-success-message">
                        We will get in touch soon.
                    </p>
                </div> : <Form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <FormInputField name="email" type="email" label="Email"/>
                    <FormInputField name="subject" type="text" label="Subject"/>
                    <FormTextArea name="message" label="Your message"/>

                    <Divider/>
                    {submitting ? <Spinner/> :
                        <button className="submit-button"
                                type="submit">Send</button>}
                    <Divider/>
                </Form>}
        </div>
        <div className="contact-info-panel">
            <div className="contact-address">
                <p>
                    <MdLocationOn size={22} style={{verticalAlign: "text-bottom", paddingRight: "0.5em"}}/>
                    55 Captain Rosemary Road, 5213 Springland
                </p>
                <p>
                    <MdPhoneAndroid size={22} style={{verticalAlign: "text-bottom", paddingRight: "0.5em"}}/>
                    +331 9990 0023 8812 6334
                </p>
            </div>
            <div className="contact-social-media">
                <p><FaFacebook size={22}/></p>
                <p><FaInstagram size={22}/></p>
            </div>
        </div>
    </div>


const validate = ({email, subject, message}) => {
    const errors = {};

    if (empty(email)) {
        errors.email = 'Required'
    } else if (emailFormat(email)) {
        errors.email = 'Incorrect email format'
    }

    if (empty(subject)) {
        errors.subject = 'Required'
    } else if (minLength(subject)) {
        errors.subject = 'Must be more than 2 characters'
    }

    if (empty(message)) {
        errors.message = 'Required'
    }

    return errors;
};

export default reduxForm({
    form: 'contact-form',
    validate,
    onSubmit: (() => new Promise(resolve => setTimeout(resolve, 2000)))
})(Contact);