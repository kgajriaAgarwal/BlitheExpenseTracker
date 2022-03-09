import React from 'react';
import {Card, CardHeader, CardContent , Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './mainStyles';
import Form from './Form/Form';
import List from './List/List';
import useTransactions from '../../useTransactions';

const Main = () =>{

    const classes = useStyles();
    const { totalSum} = useTransactions();

    const showBal = () =>{
        if(totalSum?.income_total >= totalSum?.expense_total){
            return `Total balance $${totalSum?.income_total - totalSum?.expense_total}`;
        }else{
            return 'you have exceeded the expenses over your income..';
        }
        // totalSum?.income_total>totalSum?.expense_total ? totalSum?.income_total-totalSum?.expense_total: 'you have exceeded the expenses over your income..'}
    }

    return(
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Sheechly"/>
            <CardContent>
                <Typography align="center" variant='h5'>{showBal()}</Typography>
                <Typography variant='subtitle1' style={{lineHeight:'1.5em', marginTop: '20px'}}>
                    {/* ..Info card component */}
                    Try saying: Add income for $100
                </Typography>
                <Divider/>
                {/* form component */}
                <Form/>
            </CardContent>
            <CardContent className ={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* List component */}
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Main;