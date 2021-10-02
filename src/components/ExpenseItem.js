import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //   const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  //   const month = expenseDate.toLocaleString("en-US", { month: "long" });
  //   const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  //   const year = expenseDate.getFullYear();

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
