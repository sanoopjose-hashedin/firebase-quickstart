import firebase from "firebase/app";
import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    firebase
      .auth()
      .signInAnonymously()
      .then(function () {
        return firebase.auth().signInAnonymously();
      })
      .then(function () {
        fetchData();
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const fetchData = async () => {
    const resposne = await firebase.firestore().collection("restaurants").get();
    const restaurants = resposne.docs.map((doc) => doc.data());

    if (!restaurants) {
      console.log("No such document!");
    } else {
      console.log("Restaurants:", restaurants);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
