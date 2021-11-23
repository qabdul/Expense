import React from "react";
import ExpenseList from "../../components/ExpenseList";
import TopFold from "../../components/TopFold";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;
