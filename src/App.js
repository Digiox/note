
import './App.css';
import { VoteView } from './Pages/Pages'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import firebase from "firebase"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';


const firebaseConfig = {
  apiKey: "AIzaSyDifBEaQsHU39ciV70anxpeSV2VMrN2xKs",
  authDomain: "react-vote-app-b873a.firebaseapp.com",
  databaseURL: "https://react-vote-app-b873a.firebaseio.com",
  projectId: "react-vote-app-b873a",
  storageBucket: "react-vote-app-b873a.appspot.com",
  messagingSenderId: "616159177329",
  appId: "1:616159177329:web:92175a2e8cf685974dc9d0"
};

firebase.initializeApp(firebaseConfig);
const DB = firebase.database()
function App() {
  const [data, setData] = useState(null)
  console.log(window.location.pathname)

  useEffect(() => {
    if (window.location.pathname !== '/' && data === null) {
      DB.ref(window.location.pathname).once('value').then(snap => { console.log(snap.val()); setData(snap.val()) })
    }
  }, [])

  const renderRoute = () => {

    return (
      <Route path={window.location.pathname}>
        <VoteView serviceName={data.NAME} serviceDescription={data.DESC} />
      </Route>
    )


  }
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#6B9ED1"

      },
      radioGood: {
        main: "#6B9ED1"
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Router>

        <Switch>
          {data === null ? <h1>loading</h1> : renderRoute()}

        </Switch>
      </Router>

    </ThemeProvider>



  );
}

export default App;
