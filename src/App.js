import logo from './logo.svg';
import './App.css';
import firebase from './firebaseConfig'
import {getMessaging, getToken, onMessage} from 'firebase/messaging'


const App = ()=> {



  const messaging = getMessaging(firebase);


  getToken(messaging, {vapidKey: 'BD_-kHltSzW8cLuCYiIeQq5Y-u5QwZH1X_dCEuwEMSEFcczXXs_Ut22k_CNBtlQnsBUoywlTi-FYMiWQL_OEeI0'})
  .then((currentToken) => {
    if (currentToken) {
      console.log("Message token : ", currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });


  onMessage(messaging, (payload)=>{
    console.log(payload);
  })








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
