import { FormField, Button, Form } from "semantic-ui-react";
import ExpenseTList from "./ExpenseTList";
import ExpenseTCount from "./ExpenseTCount";
import { useState } from "react";

const ExpenseTForm = () => {
  const [expense, setExpense] = useState<any>([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const getFormData = (e: any) => {
    e.preventDefault();
    if(expenseName !== "" && expenseAmount !== "") {
        setExpense([...expense, { name: expenseName, amount: expenseAmount }]);
    } else {
        alert("Please enter all the details");
    }
    setExpenseName("");
    setExpenseAmount("");
  };

  const clearAll = () => {
    setExpense([]);
  };

  return (
    <div className="col-md-6 m-auto mt-5 p-3">
      <div className="shadow p-3 mb-5 bg-body rounded">
        <div>
          <h1 className="text-center fw-bolder">Expense Tracker</h1>
        </div>
        <Form>
          <FormField>
            <label className="fs-5">Item Name : </label>
            <input
              placeholder="Enter item name"
              value={expenseName}
              onChange={(e) => setExpenseName(e?.target?.value)}
            />
          </FormField>
          <FormField>
            <label className="fs-5">Item Amount : </label>
            <input
              placeholder="Enter item amount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e?.target?.value)}
            />
          </FormField>
          <div className="mt-4">
            <Button primary onClick={getFormData}>
              Add Item
            </Button>{" "}
            <Button color="pink" onClick={clearAll}>
              Clear All
            </Button>
          </div>
        </Form>
        <div className="mt-4">
          <ExpenseTList expenseList={expense} />
        </div>
        <div>
          <ExpenseTCount expenseList={expense} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseTForm;
