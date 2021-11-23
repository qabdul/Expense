import React from "react";
import Home from "./pages/home";
import "./index.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddExpense from "./components/AddExpense";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-expense" component={AddExpense} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
