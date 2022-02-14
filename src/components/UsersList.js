import React from "react";
import styles from "./UsersList.module.css";

// import Card from "./UI/Card";

function UsersList(props) {
  console.log(props.items, "in list");

  const deleteHandler = (e) => {
    props.onDelete(+e.target.id);
  };

  return props.items.length > 0 ? (
    <div className={styles.users}>
      <ul>
        {props.items.map((user) => (
          <li key={user.id} id={user.id} onClick={deleteHandler}>
            {user.to_name}, e-mail: {user.to_email}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className={styles.users}>
      <h3>Fill the list with your friends</h3>
    </div>
  );
}

export default UsersList;
