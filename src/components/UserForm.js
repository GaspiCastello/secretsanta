import { useState } from "react";
import styles from "./UserForm.module.css";
// import Card from "./UI/Card.js";
// import Button from "./UI/Button";
// import ErrorModal from "./UI/ErrorModal";

function UserForm(props) {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const [error, setError] = useState(null);

  const addNameHandler = (e) => {
    setInputName(e.target.value);
  };
  const addEmailHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputName.trim().length > 0 && inputEmail.trim().length > 0) {
      const user = {
        to_name: inputName,
        to_email: inputEmail,
        id: Math.random(),
      };
      props.onInputUser(user);
      setInputName("");
      setInputEmail("");
    } else {
      setError({ title: "BLA", content: "Name or email is not correct" });
    }
  };
  // const onClickHandler = () => {
  //   setError(null);
  //   setInputName("");
  //   setInputAge("");
  // };
  return (
    <div>
      {/* {error && (
        <ErrorModal
          onClick={onClickHandler}
          title={error.title}
          content={error.content}
        />
      )} */}
      <div className={`${styles.input}`}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            
            id="username"
            value={inputName}
            type="text"
            onChange={addNameHandler}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            
            id="email"
            value={inputEmail}
            type="email"
            onChange={addEmailHandler}
          ></input>

          <button type="submit" className={styles.button}>
            ADD
          </button>
        </form>
        <h3>Clicks on items to delete</h3>
      </div>
    </div>
  );
}

export default UserForm;
