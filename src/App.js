import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import MainTodo from "./Components/MainTodo";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

//TODO add transition smoothness
//TODO add better styles
//TODO popup window for signin

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/register">
          <Signup />
        </Route>

        <Route path="/:user">
          <MainTodo />
        </Route>
      </Switch>
    </Router>
    // <div className="screen">
    //   <Header togglePopup={togglePopup} />
    //   <MainTodo />
    // </div>
  );
}

export default App;
