import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("user_6he47s3uAkfOdqIfnRh3n");

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_ckgorsm",
        form.current,
        "user_6he47s3uAkfOdqIfnRh3n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="field">
        <label htmlFor="to_name">to_name</label>
        <input type="text" name="to_name" id="to_name"></input>
      </div>
      <div className="field">
        <label htmlFor="to_email">to_email</label>
        <input type="text" name="to_email" id="to_email"></input>
      </div>
      <div className="field">
        <label htmlFor="assigned">assigned</label>
        <input type="text" name="assigned" id="assigned"></input>
      </div>
      <input type="submit" id="button" value="Send Email"></input>
    </form>
  );
};

export default ContactUs;
