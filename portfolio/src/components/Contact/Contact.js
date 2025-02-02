import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const [Mailsent, setMailsent] = useState(0);
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [Submit, setSubmit] = useState(false);
  const form = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const emailRef = useRef();

  const setInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const SetFocus = (ref) => {
    ref.current.focus();
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const nameRegex = /^[A-Za-z\s]+$/;

    //validation on name
    if (values.name.length === 0) {
      SetFocus(nameRef);
      errors.name = "Enter your name!";
    } else if (!nameRegex.test(values.name)) {
      SetFocus(nameRef);
      errors.name = "Name can't contain Numbers or Special Character";
    }

    //validation on email
    if (values.email.length === 0) {
      SetFocus(emailRef);
      errors.email = "Enter your mail ID!";
    } else if (!emailRegex.test(values.email)) {
      SetFocus(emailRef);
      errors.email = "Enter a proper Email ID!";
    }

    //validation on message
    if (values.message.length === 0) {
      SetFocus(messageRef);
      errors.message = "Enter your message!";
    } else if (values.message.length < 10) {
      SetFocus(messageRef);
      errors.message = "Message too short to be sent!";
    }

    // console.log("Erros from validation function is", errors);
    return errors;
  };

  const ValidateForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // console.log("Form errors object is ", formErrors);
    if (Object.keys(formErrors).length === 0) setSubmit(true);
  };

  const sendEmail = async () => {
    //console.log(formValues);

    //send the mail and await its completion
    await emailjs
      .sendForm(
        "sservice_ed5oqtp",
        "template_3ykngkh",
        form.current,
        "He0n7OJ43yVcWIOmU"
      )
      .then(
        () => {
          console.log("Mail Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    // wait for 2s for email to be sent and then clear the message
    setTimeout(() => {
      setMailsent(0);
    }, 2500);

    //set the message sent msg
    setTimeout(() => {
      setMailsent(1);
      setFormValues(initialValues);
      setFormErrors({});
      setSubmit(false);
    }, 1000);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && Submit) {
      sendEmail();
    }
  }, [Submit, formErrors]);

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title"> Contact Me </h2>{" "}
      <span className="section_subtitle get_in_touch"> Lets Get in touch </span>
      <div className="contact_container container ">
        <div className="contact_content">
          <h3 className="contact_title"> Write to Me </h3>
          <form ref={form} onSubmit={ValidateForm} className="contact_form">
            <div className="contact_form_div">
              <label className="contact_form_tag"> Name </label>{" "}
              <input
                ref={nameRef}
                value={formValues.name}
                onChange={(e) => setInputChange(e)}
                type="text"
                name="name"
                className="contact_form_input"
                placeholder="Write your name"
              />
              <span className="error-name"> {formErrors.name} </span>{" "}
            </div>
            <div className="contact_form_div">
              <label className="contact_form_tag"> Email </label>{" "}
              <input
                type="text"
                name="email"
                ref={emailRef}
                value={formValues.email}
                onChange={(e) => setInputChange(e)}
                className="contact_form_input"
                placeholder="Write your email"
              />
              <span className="error-mail"> {formErrors.email} </span>{" "}
            </div>
            <div className="contact_form_div contact_form_area">
              <label className="contact_form_tag"> Message </label>{" "}
              <textarea
                ref={messageRef}
                value={formValues.message}
                onChange={(e) => setInputChange(e)}
                name="message"
                cols="30"
                rows="10"
                className="contact_form_input"
                placeholder="Write your message"
              />
              <span className="error-message"> {formErrors.message} </span>{" "}
            </div>
            <div
              className={
                Mailsent === 0 ? "message_sent" : "message_sent active"
              }
              id="message_sent"
            >
              Message sent{" "}
            </div>
            <button className="button button--flex submit_button">
              Send Message{" "}
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>{" "}
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>{" "}
              </svg>{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default Contact;
