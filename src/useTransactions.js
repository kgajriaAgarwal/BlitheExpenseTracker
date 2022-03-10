//This is a custom hook that willl contain logic for calculating total catergories
// transactins and will be able to fetch this data from details files

import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';
import { resetCategories } from './constants/categories';

const useTransactions = () => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const incomeDatapoints = [];
  const expenseDatapoints = [];

  const totalReducer=(accumulator, value)=>value.type === 'Expense'?
    {...accumulator, expense_total: accumulator.expense_total+value.amount}:
    {...accumulator, income_total: accumulator.income_total+value.amount};
  
  const totalSum=transactions.reduce(totalReducer,{income_total:0,expense_total:0}); 

  const reducer = (acc, curr) => {
    const trfound = acc.some((trData) => trData.category === curr.category);
    if (trfound) {
      return acc.map((trData) =>
        trData.category === curr.category
          ? { ...trData, amount: trData.amount + curr.amount }
          : trData
      );
    } else {
      return [...acc, curr];
    }
  };
  
  transactions.reduce(reducer, []).forEach(trObj => {
   if(trObj.type === 'Expense'){
     expenseDatapoints.push({name:trObj.category,y:(trObj.amount/totalSum.expense_total)*100})
   }else{
    incomeDatapoints.push({name:trObj.category,y:(trObj.amount/totalSum.income_total)*100})
   }
 });

  return {totalSum,incomeDatapoints,expenseDatapoints}
};

export default useTransactions;