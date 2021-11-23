import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
} from "../actionTypes/expenses";

const initList = () => {
  const expenses = JSON.parse(localStorage.getItem("expenses-list"));
  let expenseList = [];
  if (expenses) {
    expenseList = expenses;
  }
  return expenseList;
};
const initialState = {
  expenseList: initList(),
  query: "",
};

export const expenseReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case ADD_EXPENSE: {
      console.log(state + type + data);
      localStorage.setItem(
        "expenses-list",
        JSON.stringify([...state.expenseList, data])
      );
      return {
        ...state,
        expenseList: [...state.expenseList, data],
      };
    }

    case DELETE_EXPENSE: {
      const deleteData = data;
      const updatedData = state.expenseList.filter(
        (item) => item.createdAt !== deleteData
      );
      localStorage.setItem("expenses-list", JSON.stringify(updatedData));
      return {
        ...state,
        expenseList: updatedData,
      };
    }

    case SEARCH_EXPENSE: {
      const query = data;
      return {
        ...state,
        query,
      };
    }
    default:
      return state;
  }
};
