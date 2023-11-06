import React from "react";
const BudgetItem = ({ title, budget, spent }) => {
    const percentageSpent = (spent / budget) * 100;
    const barWidth = percentageSpent > 100 ? 100 : percentageSpent;
    const barColor = percentageSpent > 100 ? 'red' : (percentageSpent >= 75 ? '#FFC3A0' : '#A8DADC');
  
    const progressStyle = {
      backgroundColor: barColor,
      height: '20px',
      borderRadius: '10px',
      width: `${barWidth}%`,
    };
  
    const spentText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(spent);
    const budgetText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(budget);
  
    const textStyle = {
      color: percentageSpent > 100 ? 'red' : 'inherit',
    };
  
    return (
      <div>
        <h3>{title}</h3>
        <p style={textStyle}>Spent: {spentText} / Budget: {budgetText}</p>
        <div style={{ border: '1px solid #ccc', borderRadius: '10px' }}>
          <div style={progressStyle}></div>
        </div>
      </div>
    );
  };
  
  export default BudgetItem;
