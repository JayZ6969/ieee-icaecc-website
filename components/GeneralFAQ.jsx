import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const classes = {
  FAQcontainer: 'flex flex-col ',
  TitleContainer: 'flex  bg-orange-400 py-16 justify-center ',
  TitleCard: 'lg:max-w-[1150px] w-full text-left ',
  Title: 'xl:text-5xl text-3xl md:text-4xl font-bold text-white mt-1 px-8 ',
  FAQsection: 'w-full py-8 flex flex-col p-4 justify-center items-center  mt-4',
  Accordionsection:'w-full  max-w-[1100px]',
  Question:'text-xl font-semibold py-6'
};

const FAQquestions = [
  { Question: 'When will I be able to register for the conference?', Answer: 'Registration will open on September 1! Please continue to check back for updates. Once open delegates will be able to register through the registration page.' },
  { Question: 'When will I be able to submit a Manuscript for the conference?', Answer: 'Paper submission is open now! Please see the Author Submissions Page for more information' },
  { Question: 'How do I view the program online?', Answer: 'The program will be updated on the conference website as it is confirmed. For updates, please see the Program page.' },
  { Question: 'How do I get to the conference?', Answer: 'Details on how to travel to the conference will be added to the travel page of this website. Please continue to check back closer to the event for updates!' },
];

const GeneralFAQ = () => {
  return (
    <div className={classes.FAQcontainer}>
      <div className={classes.TitleContainer}>
        <div className={classes.TitleCard}>
          <h1 className={classes.Title}>General FAQ</h1>
        </div>
      </div>
      <div className={classes.FAQsection}>
        {FAQquestions.map((faq, index) => (
          <div className={classes.Accordionsection}>
            
            <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.Question}>{faq.Question}</div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.Answer}</Typography>
            </AccordionDetails>
        </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralFAQ;