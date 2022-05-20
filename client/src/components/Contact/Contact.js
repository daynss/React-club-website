import React from "react";
import { reduxForm, Form } from "redux-form";
import { FormInputField, FormTextArea } from "./../Form/FormInputs";
import { empty, minLength, emailFormat } from "./../Form/Validator";
import Spinner from "../BasicComponents/Spinner/Spinner";
import Divider from "../BasicComponents/Divider/Divider";
import Button from "../BasicComponents/Button/Button";

const Contact = ({ handleSubmit, onSubmit, submitting, submitSucceeded }) => (
  <div className="contact">
    <div className="contact-wrapper">
      {submitSucceeded ? (
        <div className="contact-form-success">
          <p>Thank you for your message!</p>
          <p>We will get in touch soon.</p>
        </div>
      ) : (
        <Form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <FormInputField name="email" type="email" label="Email" />
          <FormInputField name="subject" type="text" label="Subject" />
          <FormTextArea name="message" label="Your message" />

          <Divider />
          {submitting ? <Spinner /> : <Button type="submit" label="Send" />}
          <Divider />
        </Form>
      )}
    </div>
  </div>
);

const validate = ({ email, subject, message }) => {
  const errors = {};

  if (empty(email)) {
    errors.email = "Required";
  } else if (emailFormat(email)) {
    errors.email = "Incorrect email format";
  }

  if (empty(subject)) {
    errors.subject = "Required";
  } else if (minLength(subject)) {
    errors.subject = "Must be more than 2 characters";
  }

  if (empty(message)) {
    errors.message = "Required";
  }

  return errors;
};

export default reduxForm({
  form: "contact-form",
  validate,
  onSubmit: () => new Promise((resolve) => setTimeout(resolve, 2000)),
})(Contact);
