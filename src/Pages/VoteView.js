import './pages.css'
import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import {Wave, H1Title, Paragraph} from "../Atoms/Atoms"

import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon1: {

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: '0px',
    position: "relative",
    borderRadius: '50%',
    border: "2px solid #54F511",
    width: '24px',
    height: '24px',
    // backgroundColor: '#fffff',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },

  },
  checkedIcon1: {
    borderRadius: "50px",
    position: "absolute",
    backgroundColor: "#54F511",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: "20px",
    height: "20px",

    // 'input:hover ~ &': {
    //   backgroundColor: '#54F511',
    // },
  },
  icon2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: '0px',
    position: "relative",
    borderRadius: '50%',
    border: "2px solid #FFD95B",
    width: '24px',
    height: '24px',
    // backgroundColor: '#fffff',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },

  },
  checkedIcon2: {
    borderRadius: "50px",
    position: "absolute",
    backgroundColor: "#FFD95B",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: "20px",
    height: "20px",

    // 'input:hover ~ &': {
    //   backgroundColor: '#54F511',
    // },
  },
  icon3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: '0px',
    position: "relative",
    borderRadius: '50%',
    border: "2px solid #F26368",
    width: '24px',
    height: '24px',
    // backgroundColor: '#fffff',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },

  },
  checkedIcon3: {
    borderRadius: "50px",
    position: "absolute",
    backgroundColor: "#F26368",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: "20px",
    height: "20px",

    // 'input:hover ~ &': {
    //   backgroundColor: '#54F511',
    // },
  },
  voteViewTitle: {
    paddingTop: "18%",
    fontSize: "3em !important",
    fontFamily: "Madina",
    textAlign: "center",
  },
  noteTextLabel: {
    textAlign: "center"
  },
  voteViewRadioGroup: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "16%"
  },
  submitButton: {
    marginTop: "10%"
  },

  voteViewDesc: {
    textAlign: 'center',
    paddingTop: '10%',
     paddingLeft: '5%',
     paddingRight: '5%',
  },
  titleSection: {
    backgroundColor: '#6B9ED1',
    position: 'relative',
    height: '50vh',
  },
  voteSection: {
    margin: '10%',
    display: 'flex',
    justifyContent: 'center',
  }
});

function VoteView(props) {

  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <section className={classes.titleSection}>
        <H1Title className={classes.voteViewTitle}>{props.serviceName}</H1Title>
        <Paragraph className={classes.voteViewDesc}>{props.serviceDescription}</Paragraph>
        <Wave />
        </section>
      <section className={classes.voteSection}>

        <FormControl component="fieldset">
          <FormLabel className={classes.noteTextLabel} component="legend">Noter {props.serviceName}</FormLabel>
          <RadioGroup className={classes.voteViewRadioGroup} aria-label="evaluation" name="eval1" value={value} onChange={handleChange}>

            <FormControlLabel value="1" control={<Radio
              className={classes.root}
              disableRipple
              color="default"
              checkedIcon={<span className={clsx(classes.icon1)} >
                <span className={classes.checkedIcon1} />
                
              </span>}
              icon={<span className={classes.icon1} />}
              {...props}
            />} label="Parfait" />

            <FormControlLabel value="2" control={<Radio
              className={classes.root}
              disableRipple
              color="default"
              checkedIcon={<span className={clsx(classes.icon2)} >
                <span className={classes.checkedIcon2}/>
              </span>}
              icon={<span className={classes.icon2} />}
              {...props}
            />} label="Moyen" />

            <FormControlLabel value="3" control={<Radio
              className={classes.root}
              disableRipple
              color="default"
              checkedIcon={<span className={clsx(classes.icon3)} >
                <span className={classes.checkedIcon3}/>
              </span>}
              icon={<span className={classes.icon3} />}
              {...props}
            />} label="Mauvais" />
          </RadioGroup>

          <Button className={classes.submitButton} variant="contained" color="primary">
            Valider
          </Button>
        </FormControl>

      </section>
    </div>
  );
}

export default VoteView;