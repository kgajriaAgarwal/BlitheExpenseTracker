//This is a custom hook that willl contain logic for calculating total catergories transactins and will be able to fetch this data from details files

//-----------------------------------------------------------------------------

import { useContext, useState } from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  console.log("title$$$$", title);
  debugger

  console.log("trans.", transactions);

  const rightTransactions = transactions.filter((t) => t.type === title);
  const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
  // const total = rightTransactions.reduce((acc, currVal) => 
  //   // acc += currVal.amount
  //   (cVal.type === Income)? return {...acc, income_total: acc}
  //   , {});
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  // const dataPoints = [];
  let itemExists = false;

  // rightTransactions.forEach((t) => {
  //   const category = categories.find((c) => c.type === t.category);

  //   if (category){
  //     category.amount += t.amount
  //     itemExists = true;
  //   };
  //   dataPoints.push({name:t.category, y:(category.amount/total)*100})
  // });

  // const dataPoints = rightTransactions.map((t) => {
  //   const category = categories.find((c) => c.type === t.category);

  //   if (category){
  //     category.amount += t.amount
  //     itemExists = true;
  //     return { name:t.category, y: (category.amount/total)*100 }
  //   }else{
  //     // return ({name:t.category, y:(t.amount/total)*100});
  //     return t;
  //   }
  //   // dataPoints.push({name:t.category, y:(category.amount/total)*100})
  // });

  // const dataPoints = rightTransactions.map((t) => { return { name:t.category, y: (category.amount/total)*100} })


  // const transactionReducer = (acc, cVal) => {
  //   console.log("acc", acc);
  //   const category_found = acc.some(transaction => transaction.category === cVal.category ) 
  //   debugger
  //   if(category_found){
  //     console.log("#33", acc.items.map(tr=>tr.category === cVal.category? 
  //       {...tr, amount: tr.amount+cVal.amount, id: cVal.id}:tr));
  //     return acc.items.map(tr=>tr.category === cVal.category? 
  //         {...tr, amount: tr.amount+cVal.amount, id: cVal.id}:tr
  //       )
  //   }else{
  //     return [...acc, cVal];
  //   }
  // }

  // const total_reducer = (acc, curr) => {
  //   const trfound = acc.some((trData) => trData.category === curr.category);
  //   if (trfound) {
  //     return acc.map((trData) =>
  //       trData.type === curr.type
  //         ? { ...trData, income: trData.amount + curr.amount }
  //         : trData
  //     );
  //   } else {
  //     return [...acc, curr];
  //   }
  // };
 // console.log(arr.reduce(reducer, []));

//  const totalReducer = (acc, curr) => {  
//   if(curr.type === 'Expense'){
//     return {...acc,expense_total: acc.expense_total+curr.amount}
//   }else{
//     return {...acc,income_total: acc.income_total+curr.amount }
//  }}
// };

// console.log("result  total is..:",transactions.reduce(totalReducer, {income_total:0, expense_total:0}));

// const numList=[1,3,55,22,44];

const totalReducer=(accumulator, value)=>value.type === 'Expense'?{...accumulator, expense_total: accumulator.expense_total+value.amount}:{...accumulator, income_total: accumulator.income_total+value.amount};

const totalSum=transactions.reduce(totalReducer,{income_total:0,expense_total:0});
console.log("totalSum:",totalSum);

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
 // console.log(arr.reduce(reducer, []));

 const incomeDatapoints = [];
 const expenseDatapoints = [];
  
 transactions.reduce(reducer, []).forEach(trObj => {
   if(trObj.type === 'Expense'){
     expenseDatapoints.push({name:trObj.category,y:(trObj.amount/totalSum.expense_total)*100})
   }else{
    incomeDatapoints.push({name:trObj.category,y:(trObj.amount/totalSum.income_total)*100})
   }
 });

 console.log("incomeDatapoints", incomeDatapoints);
 console.log("expenseDatapoints", expenseDatapoints);

  console.log("result is..:",transactions.reduce(reducer, []));


  // const dataPoints = transactions.reduce(reducer, []).map(el=> {return {name:el.category, y:(el.amount/total)*100}})



  // console.log("datapoints:", dataPoints);


  // if(!itemExists) {
  //   dataPoints.push({ ...action.payload, qty: 1 });
  // }
  // console.log("dataPoints..", dataPoints);
  // console.log("diff_array:", diff_arr);

  //  const filteredCategories = dataPoints.filter((sc) => sc.amount > 0);
//setfilteredCategories(categories.filter((sc) => sc.amount > 0));
  
  // debugger
  // console.log("FILTERED CATEGORIES..", filteredCategories);

//   const dataPoints: [
//     { name: "Unsatisfied", y: 5 },
//     { name: "Very Unsatisfied", y: 31 },
//     { name: "Very Satisfied", y: 40 },
//     { name: "Satisfied", y: 17 },
//     { name: "Neutral", y: 7 }
// ]

  // const chartData = {
  //   datasets: [{
  //     data: filteredCategories.map((c) => c.amount),
  //     backgroundColor: filteredCategories.map((c) => c.color),
  //   }],
  //   labels: [...filteredCategories.map((c) => c.type)],
  // };

//   console.log("CHARTDATA IS HERE..", chartData);
return {totalSum,incomeDatapoints,expenseDatapoints}
  //  return { filteredCategories, total, dataPoints };
};

export default useTransactions;