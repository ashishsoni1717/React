import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ImpLink from './ImpLink';
import ImpWebsites from './ImpWebsites';
import Notice from './Notice';
//import { Outlet, Link } from "react-router-dom";


const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontWeight: theme.typography,
    textAlign:theme.center
  }));


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'light' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}



Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function FlexShrink() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
      >
 {/* IMportant Link start */}
        <Item sx={{ width: '30%', fontWeight:'700' }}>
        <Div>{"IMPORTANT LINK"}
        <ImpLink/>
        </Div>
        <br/>
        <Div>{"IMPOTANT WEBSITES"}
        <ImpWebsites/>
        </Div>
             </Item>
 {/* IMportant Link end */}
 

 {/* NOTICE BOARD start */}
        <Item sx={{ width: '75%'}}>
        <Div>{"NOTICE BOARD"}
        <Notice/>
        </Div>
        </Item>
{/* NOTICE BOARD end */}
      </Box>
    </div>
  );
}
