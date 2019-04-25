import React from "react";
import "./App.css";
//import NavBar from "./components/NavBar";
//import Header from "./components/Header";
import Books from "./components/Books";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
{/*       <NavBar />
      <Header /> */}
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/search" component={Books} />
        <Route exact path="/saved" component={Books} />
      </Switch>
    </Router>
  );
}

export default App;
