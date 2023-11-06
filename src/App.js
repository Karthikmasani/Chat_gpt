import React, { useState } from "react";
import BudgetForm from "./compoenents/form";
import BudgetItem from "./compoenents/counterapp";


import "./App.css"
const App = () => {
  const [budgets, setBudgets] = useState([
    { title: 'Rent', budget: 800, spent: 800 },
    { title: 'Pet Supplies', budget: 150, spent: 50 },
    { title: 'Groceries', budget: 200, spent: 150 },
    { title: 'Utilities', budget: 100, spent: 75 },
    { title: 'Entertainment', budget: 150, spent: 200 },
  ]);
  

  const addBudget = (newBudget) => {
    setBudgets([...budgets, newBudget]);
  };

  return (
    <div>
      <h1>Budget Visualization</h1>
      <BudgetForm addBudget={addBudget} />
      <h2>Current Budgets</h2>
      {budgets.map((budget, index) => (
        <BudgetItem
          key={index}
          title={budget.title}
          budget={budget.budget}
          spent={budget.spent}
        />
      ))}
    </div>
  );
}
export default App;
