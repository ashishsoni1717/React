import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
//import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const impLinks = [{
  id:1,
  label:"Training and deputation Circulars",
  route:"",
  sublabelAll:[
    { subId:1,subLabel:"Download Latest",route:""},
    {subId:2,subLabel:"View All",route:""},
  ],
  color:"red"
},
{
  id:2,
  label:"State Government Circular",
  route:"",
  sublabelAll:[
    {subId:1, subLabel:"Download Latest",route:""},
    { subId:2,subLabel:"View All",route:""},
  ],
  color:"red"
},

{
  id:3,
  label:"Travelling Allowance Bill",
  route:"",
  sublabelAll:[
    {subId:1, subLabel:"Download",route:""}
  ],
  color:"red"
},

{
  id:4,
  label:"ITR Income Tax Return ",
  route:"",
  sublabelAll:[
    {subId:1, subLabel:"Download",route:""}
  ],
  color:"red"
},
{
  id:5,
  label:"Details of Retired Officers",
  route:"",
  sublabelAll:[
    {subId:1, subLabel:"Download Latest",route:""},
    { subId:2,subLabel:"View All",route:""},
  ],
  color:"red"
},
{
  id:6,
  label:"Address Speech of Governer ",
  route:"",
  sublabelAll:[
    {subId:1, subLabel:"Download",route:""}
  ],
  color:"red"
},
{
  id:7,
  label:" Important Contact Number For Ministry ",
  route:"",
  sublabelAll:[
    {subId:1, subLabel:"Download",route:""}
  ],
  color:"red"
},
]


const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.6rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };

  
  return (
    <div>

{impLinks.map((data,ele)=>{
  return(
    <Accordion key={ele} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <h5 style={{color:data.color}}>{data.label}</h5>
    </AccordionSummary>
    <AccordionDetails>
      {data.sublabelAll.map((subData,subEle)=>{
return <h5 key={ele+subEle}>{subData.subLabel}</h5>
      })}
      
    </AccordionDetails>
  </Accordion>
  )
})}


      {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h5>Training and deputation Circulars</h5>
        </AccordionSummary>
        <AccordionDetails>
          <h6>Download Latest</h6>
          <h6>View All</h6>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h5>State Government Circular</h5>
        </AccordionSummary>
        <AccordionDetails>
          <p>Download Latest</p>
          <p>View All</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <h5>Travelling Allowance Bill</h5>
        </AccordionSummary>
        <AccordionDetails>
          <p>Download Zip</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <h5>ITR Income Tax Return</h5>
        </AccordionSummary>
        <AccordionDetails>
          <p>Download</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <h5>Details of Retired Officers(IAS, IPS, IFS)</h5>
        </AccordionSummary>
        <AccordionDetails>
          <p>Download list 1</p>
          <p>Download list 2</p>
          <p>Download list 3</p>
          <p>Download list 4</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <h5>Address Speech of Governer</h5>
        </AccordionSummary>
        <AccordionDetails>
          <p>Open PDF</p>
          <p>Download PDF</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <h5>Important Contact Number For Ministry</h5>
        </AccordionSummary>
        <AccordionDetails>
          <p>Download Latest</p>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
