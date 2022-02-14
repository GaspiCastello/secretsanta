import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import EmailSender from "./components/EmailSender";

// asdasdasds
function App() {
  const [userList, setUserList] = useState([]);

  const deleteItemHandler = (goalId) => {
    setUserList((prevList) => {
      console.log(prevList,'in setting')
      const updatedList = prevList.filter((goal) => goal.id !== goalId);
      console.log(updatedList,'updatedList')
      return updatedList;
    });
  };
  console.log(userList, "userlist");
  const inputHandler = (user) => {
    setUserList((prevState) => {
      return [user, ...prevState];
    });
  };

  return (
    <div>
      <section className="App-header  "></section>
      <section className="App-data">
        <UserForm onInputUser={inputHandler} />
        <UsersList items={userList} onDelete={deleteItemHandler} />
        <EmailSender templateParams={userList} />
      </section>
    </div>
  );
}

export default App;
