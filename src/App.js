import './App.css';
import Header from './Components/Header';
import MainTodo from './Components/MainTodo';
import SignInPopup from './Components/SignInPopup';
import {useState} from 'react';


//TODO add transition smoothness
//TODO add better styles
//TODO popup window for signin 


function App() {
  let [popup, setPopup] = useState(false);

  function togglePopup(){
    setPopup(!popup);
  }

  return (
    <div className="screen">
      {popup && <SignInPopup close={togglePopup}/>}
      <Header togglePopup = {togglePopup}/>
      <MainTodo/>
    </div>
  );
}

export default App;
