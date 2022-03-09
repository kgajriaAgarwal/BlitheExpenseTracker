import React, {useState, useContext} from 'react';
import { TextField, Typography , Grid, Button, FormControl, InputLabel, Select, MenuItem  } from '@material-ui/core';
import useStyles from './formStyles';
import {ExpenseTrackerContext} from '../../../context/context';
import { v4 as uuidv4}  from 'uuid';
import { formateDate } from '../../../utils/utils';
import { expenseCategories,incomeCategories } from '../../../constants/categories';

const initialState = {
    amount:'',
    category:'',
    type:'Income',
    date: formateDate(new Date()) 
}

const Form = () =>{

    const [formData, setFormData] = useState(initialState);
    const classes= useStyles();
    const {addTransaction} = useContext(ExpenseTrackerContext);
    console.log(formData);

    const createTransaction = () =>{
        const transaction = {...formData, amount: Number(formData.amount), id: uuidv4() }

        addTransaction(transaction);
        setFormData(initialState);
    }
    
    const selectedCategories = formData.type ==="Income"? incomeCategories :expenseCategories;

    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}> 
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value= {formData.type} onChange={(e) => setFormData({...formData, type:e.target.value})}>
                        <MenuItem value='Income'>Income</MenuItem>
                        <MenuItem value='Expense'>Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}> 
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e)=> setFormData({...formData, category:e.target.value})}>
                        {selectedCategories.length?
                            selectedCategories.map((category, categoryIndx)=>
                            <MenuItem key={categoryIndx} value={category.type}>{category.type}</MenuItem>
                            )
                        :[]}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type='number' label='amount' value={formData.amount} onChange={e=> setFormData({...formData,amount:e.target.value})} fullwidth/> 
            </Grid>
            {/* <Grid item xs={6}>
                <TextField type='date' label='Date' value={formData.date} onChange={e=> setFormData({...formData,date:formateDate(e.target.value)})} fullwidth/> 
            </Grid> */}
            <Button className='classes.button' variant='outlined' color='primary' fullWidth onClick= {createTransaction}>Create</Button>
        </Grid>
    );
}

export default Form;