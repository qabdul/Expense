import React from "react";
import "./ExpenseList.css";
import Card from "./Card";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);

  const filterList = list.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  const list2 = JSON.parse(localStorage.getItem("list"));
  console.log(list2);
  const successNotify = () => toast.success("Deleted Successfully");
  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />

      {filterList.length > 0 ? (
        filterList.map((expense) => (
          <Card item={expense} successNotify={successNotify} />
        ))
      ) : (
        <div className="empty-state">
          <img
            src={require("../assets/images/empty.png").default}
            alt="No Expenses"
            className="empty-image"
          />
          <label>Uh Oh! Your expense list is empty.</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
