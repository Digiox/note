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
import { Wave, H1Title, Paragraph } from "../Atoms/Atoms"

import { useState } from 'react';
import { HeaderBar } from '../Organisms/Organisms';
import { defineDataToRenderObject, exceptionalCases, getHigherValueInData, makeDataWithPercent } from '../Functions/functions';

const useStyles = makeStyles(theme => ({
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
    [theme.breakpoints.up('md')]: {
      paddingTop: "10%"
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '5%'
    }
  },
  noteTextLabel: {
    textAlign: "center"
  },
  voteViewRadioGroup: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
    [theme.breakpoints.up('md')]: {
      paddingTop: '0%',
      marginTop: '5%'

    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '0%',
      marginTop: '2%'

    }
  },
  submitButton: {
    marginTop: "3%",
    width: '30%',
    alignSelf: 'center'
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
    margin: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      marginTop: '2%'
    }
  },
  userVoteDiv: {
    marginBottom: '3%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
      alignSelf: 'center'
    }
  },
  userVoteDot: {
    borderRadius: "50px",
    display: 'flex',
    // backgroundColor: "#F26368",
    width: "20px",
    height: "20px",

  },
  dotDiv: {

    marginLeft: '5%',
    display: 'flex',
    [theme.breakpoints.up("md")]: {
      margin: 'auto'
    }
  }
}))

function VoteView(props) {

  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  const renderDotStats = (voteData) => {
    const perfectVoteCount = voteData.P;
    const mediumVoteCount = voteData.M;
    const badVoteCount = voteData.B;
    var HigherData = getHigherValueInData(perfectVoteCount, mediumVoteCount, badVoteCount)
    
    
    // const biggerValue = Math.max(perfectVoteCount.val, mediumVoteCount.val, badVoteCount.val)
    // [perfectVoteCount, mediumVoteCount, badVoteCount].forEach(element => {
    //   console.log(element)
    //   if (element.val === biggerValue) {
    //     return biggerData = element;
    //   }
    // });
    const caughtException = exceptionalCases(perfectVoteCount, mediumVoteCount, badVoteCount)
    if (caughtException.exception === true) {
      if (caughtException.data === null) {
        return <h2>Pas de vote</h2>
      }
      HigherData = caughtException.data
    }
    // const makeDataWithPercent = (data, totalOfValues) => {
    //   return {name: data.name, val: data.val / totalOfValues * 100}
    // }
    const transformedData = makeDataWithPercent(HigherData, perfectVoteCount.val+mediumVoteCount.val+badVoteCount.val);
    const dataToRender = defineDataToRenderObject(transformedData)
    // switch (transformedData.name) {
    //   case 'perfect':
    //     dataToRender = {color: '#54F511', value: transformedData.val}
    //     break;

    //   case 'medium': 
    //   dataToRender = {color: '#FFD95B', value: transformedData.val}
    //     break;
     
    //   case 'bad': 
    //   dataToRender = {color: '#F26368', value: transformedData.val}
    //     break;
      
    // }
    return (<div className={classes.dotDiv}>
    <span style={{backgroundColor: dataToRender.color}} className={classes.userVoteDot}>

    </span>
    <Paragraph>{Math.round(dataToRender.value)}%</Paragraph>
  </div>)
    // console.log(Math.max(perfectVoteCount, mediumVoteCount, badVoteCount))
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <section className={classes.titleSection}>
        <HeaderBar />
        <H1Title className={classes.voteViewTitle}>{props.serviceName}</H1Title>
        <Paragraph className={classes.voteViewDesc}>{props.serviceDescription}</Paragraph>
        <Wave />
      </section>
      <section className={classes.voteSection}>

        <div className={classes.userVoteDiv}>
          <Paragraph>Note des utilisateurs: </Paragraph>
          {renderDotStats(props.voteDatas)}
        </div>
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
                <span className={classes.checkedIcon2} />
              </span>}
              icon={<span className={classes.icon2} />}
              {...props}
            />} label="Moyen" />

            <FormControlLabel value="3" control={<Radio
              className={classes.root}
              disableRipple
              color="default"
              checkedIcon={<span className={clsx(classes.icon3)} >
                <span className={classes.checkedIcon3} />
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