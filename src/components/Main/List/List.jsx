import React, {useContext} from 'react';
import { List as MUIList, ListItem , ListItemAvatar, Avatar, ListItmSecondaryAction, IconButton, Slide, ListItemText, ListItemSecondaryAction} from '@material-ui/core';
import {Delete, MoneyOff} from '@material-ui/icons';
import useStyles from './listStyles';
import { ExpenseTrackerContext } from '../../../context/context';

const List =() =>{
    const classes= useStyles();
    //const globalState = useContext(ExpenseTrackerContext);
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext);

    return(
        <MUIList dense={false} className={classes.list}>
            {transactions.map(transaction=>(
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type==='Income'? classes.avatarIncome :classes.avatarExpense}>
                                <MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label='delete' onClick={()=>deleteTransaction(transaction.id)}>
                            {/* onclick={} */}
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    );
}

export default List;