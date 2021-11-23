import React from "react";
import TopFold from "./TopFold";
import "./AddExpense.css";
import AddForm from "./AddForm";

const AddExpense = () => {
  return (
    <div className="add-expense">
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
