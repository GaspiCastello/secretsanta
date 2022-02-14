import { useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import styles from "./EmailSender.module.css";

init("user_6he47s3uAkfOdqIfnRh3n");

const EmailSender = (props) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const templateParams = props.templateParams.map((a) => {
    return { ...a };
  });
  if (templateParams.length > 2) {
    let rdm = Math.floor(Math.random() * (templateParams.length - 1) + 1);
    for (let i = 0; i < templateParams.length; i++) {
      templateParams[i].assigned =
        templateParams[(i + rdm) % templateParams.length].to_name;
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSending(true);
    for (const players of templateParams) {
      const res = await emailjs.send(
        "service_kjs0aw8",
        "template_ckgorsm",
        players
      );
      console.log(res.status, res.text);
    }
    setIsSending(false);
    setIsSent(true);
  };

  return isSent ? (
    <div className={`${styles.input}`}>
      <h3>Emails Sent! check your mailbox</h3>
    </div>
  ) : (
    (templateParams.length > 2) & !isSending && (
      <div className={`${styles.input}`}>
        <form onSubmit={submitHandler}>
          <input type="submit" id="button" value="Send Email"></input>
        </form>
      </div>
    )
  );
};

export default EmailSender;
