import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Ali");
  const [age, setAge] = useState(20);
  const [friends, setFriends] = useState(["Ahmet", "Mehmet", "Ayşe"]);
  return (
    <div>
      <h1>My name is {name} and my age is {age}</h1>
      <button
        onClick={() => {
          setName("Mehmet");
          setAge(age + 1);
        }}
      >
        Click
      </button>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>

      {
        friends.map((friend, index) => (<div key={index}>{index + 1}. {friend}</div>))
      }
      <br></br>

      <button onClick={() => setFriends([...friends, "Ali"])}>Tıkla</button>

    </div>
  );
}

export default App;
