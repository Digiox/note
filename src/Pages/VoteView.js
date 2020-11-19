import './pages.css'
import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

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
  }
});

function VoteView(props) {

  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <section className='titleSection'>
        <h1 className={classes.voteViewTitle}>Le château de FoxArt</h1>
        <p className="voteViewDesc">lorem ipsum and whatever description on multiline</p>
        <div class="custom-shape-divider-bottom-1605622063">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div></section>
      <section className="voteSection">

        <FormControl component="fieldset">
          <FormLabel className={classes.noteTextLabel} component="legend">Noter le château de FoxArt</FormLabel>
          <RadioGroup className={classes.voteViewRadioGroup} aria-label="gender" name="gender1" value={value} onChange={handleChange}>

            <FormControlLabel value="1" control={<Radio
              className={classes.root}
              disableRipple
              color="default"
              checkedIcon={<span className={clsx(classes.icon1)} >
                <span className={classes.checkedIcon1} >

                </span>
              </span>}
              icon={<span className={classes.icon1} />}
              {...props}
            />} label="Parfait" />

            <FormControlLabel value="2" control={<Radio
              className={classes.root}
              disableRipple
              color="default"
              checkedIcon={<span className={clsx(classes.icon2)} >
                <span className={classes.checkedIcon2} >

                </span>
              </span>}
              icon={<span className={classes.icon2} />}
              {...props}
            />} label="Moyen" />

            <FormControlLabel value="3" control={<Radio
              className={classes.root}
              disableRipple
              color="default"
              checkedIcon={<span className={clsx(classes.icon3)} >
                <span className={classes.checkedIcon3} >

                </span>
              </span>}
              icon={<span className={classes.icon3} />}
              {...props}
            />} label="Mauvais" />
          </RadioGroup>
        </FormControl>

      </section>
    </div>
  );
}

export default VoteView;