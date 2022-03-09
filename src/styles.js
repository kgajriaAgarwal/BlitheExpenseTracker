// import { makeStyles } from "@material-ui/core/styles";

// export default makeStyles(()=> ({
//     income: {
//         borderBottom: '10px solid rgba(0 , 255 , 0 , 0.5)'
//     },
//     expense: {
//         borderBottom: '10px solid rgba(0 , 255 , 0 , 0.5)'
//     }
// }))

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));