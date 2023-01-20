import * as React from 'react';
import '../Components/all.css';
//import Typography from '@mui/material/Typography';
//import Link from '@mui/material/Link';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import { purple } from '@mui/material/colors';
import logo from '../Images/logo1.png';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//       GENERAL ADMINISTRATION DEPARTMENT
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
// const mystyle = {
//   color: "black",
//   backgroundColor: "whitesmoke",
//   /* backgroundColor: "#FCB900" */
//   padding: "5px",
//   fontFamily: "arial"
// };

export default function GridTemplateAreas() {
  return (
    <Box
      sx={{
        width: '200%',
        // height: '140px',
        color: '#FCB900',
        '& > .MuiBox-root > .MuiBox-root': {
          p: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        },
      }}
    >
      <Box >
                         
    
      
      <div className="col-md-8 contact-info">
                        <div className='mystyle'>
                        <div className="logo">
                        <a className="navbar-brand logo" href="default.aspx">
                            <img src={logo}
                             alt="logo"/></a>
                             <div>
                              <h1 style={{ margin:"10px", textalign:"justify"}}>GENERAL ADMINISTRATION DEPARTMENT</h1>
                              <h3 style={{ margin:"10px"}}>GOVERNMENT  OF CHHATTISGARH</h3>
                              </div>
                    </div> 
                           
                      </div>

                    </div>
      </Box>
    </Box>
  );
}