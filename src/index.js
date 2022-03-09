import React from 'react';
import ReactDOM from 'react-dom';
import {ExpenseTrackerProvider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <ExpenseTrackerProvider>
        <App />
    </ExpenseTrackerProvider>,
     document.getElementById('root'))