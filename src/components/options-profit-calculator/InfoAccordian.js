import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
// import {ExpandMoreIcon} from '@material-ui/icons';




function InfoAccordian() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How does this calculator work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This options profit calculator uses the Black-Scholes Model, a commonly used pricing model
            used to determine the theoretical price of a call or a put option based on
            <Box sx={{padding: 10}}>
              <img src='https://www.gstatic.com/education/formulas2/443397389/en/black_scholes_model.svg' alt='Black Scholes Formula'/>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are the limitations of this calculator?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            
            This options profit calculator uses the Black-Scholes Model, a commonly used pricing model
            used to determine the theoretical price of a call or a put option based on 
          </Typography>
        </AccordionDetails >
      </Accordion>
    </>
  );
  }
  
  export default InfoAccordian;
