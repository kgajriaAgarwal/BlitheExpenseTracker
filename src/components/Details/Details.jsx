import React from 'react';
import {Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './detailStyles';
import {Chart, ArcElement} from 'chart.js'
import ChartComponent from '../ChartComponent/ChartComponent';


const Details = (props) => {

    Chart.register(ArcElement);
    const classes = useStyles(); 
    // console.log('classes', classes);
    // const { totalSum,incomeDatapoints,expenseDatapoints} = useTransactions(props.title);
    // console.log("chatdata@@@:", chartData);

    return(       
        <Card className={props.title==='Income'?classes.income:classes.expense}>
            <CardHeader title={`${props.title==='Income'? 'income ' :'Expense'} tracking made easy..`}/>
            <CardContent>
                {/* <Typography variart="h5">
                    {props.title==='Income'?totalSum.income_total:totalSum.expense_total}
                </Typography> */}
                {/* <Doughnut data={chartData} style={{width:'250px', height:'250px'}}/> */}
                <ChartComponent title={props.title}/>
            </CardContent>
        </Card>
    );
}

export default Details;
