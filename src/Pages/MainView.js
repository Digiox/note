import React from 'react';
import { H1Title, Paragraph, Wave } from '../Atoms/Atoms'
import { makeStyles } from '@material-ui/core/styles';
import { HeaderBar } from "../Organisms/Organisms"
const useStyles = makeStyles((theme) => ({
    titleSection: {
        backgroundColor: '#6B9ED1',
        position: 'relative',
        height: '50vh',
    },
    mainTitle: {

        paddingTop: "6%",
        fontSize: "3em",
        fontFamily: "ArimaMadurai",
        textAlign: "center",

    },
    mainViewDesc: {
        textAlign: 'center',
        paddingTop: '4%',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    mainSection: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10%',
        paddingLeft: "20%",
        paddingRight: "20%",
        textAlign: "center",
    },
    conceptText: {
        marginTop: '20%'
    },
    introParagraph: {
        fontSize: "1em",
         [theme.breakpoints.up('md')]: {
            fontSize: '2em'
        }
    },
    conceptParagraph: {
        fontSize: "1em",
        [theme.breakpoints.up('md')]: {
            fontSize: '2em'
        }
    }
}))

const MainView = () => {

    const classes = useStyles();

    return (
        <div>
            <section className={classes.titleSection}>
                <HeaderBar />
                <Wave />
                <H1Title className={classes.mainTitle}>IZZY</H1Title>
                <Paragraph className={classes.mainViewDesc}>Simple, rapide et à la portée de tout le monde. <br /> Donnez votre avis en 2 clics !</Paragraph>
            </section>

            <section className={classes.mainSection}>
                <div className={classes.introText}>
                    <H1Title>Introduction</H1Title>
                    <Paragraph className={classes.introParagraph}>
                        L'application est en développement continu, mais désormais déjà fonctionnelle.
                        A l'avenir, vous pourrez en quelques clics Ajouter vous même vos services à notre liste et profiter de multiples fonctionnalités.

                   <br /> En attendant, si vous souhaitez ajouter un service à notre liste, Prenez contact avec nous à l'adresse suivante:
                    adresse@gmail.com
                </Paragraph>
                </div>

                <div className={classes.conceptText}>
                    <H1Title>le concept</H1Title>
                    <Paragraph className={classes.conceptParagraph}>
                        IZZY, c'est une application permettant à n'importe qui de noter ou faire noter un service.

                       <br/> L'application est pensée pour être la plus simple possible à utiliser.

                       <br/> Alors parlez d'IZZY autour de vous, car c'est ainsi que l'application prendras son envol !
                </Paragraph>
                </div>

            </section>
        </div>
    );
}

export default MainView;