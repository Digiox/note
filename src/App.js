import logo from './logo.svg';
import './App.css';
import VoteView from './Pages/VoteView'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';



function App() {
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

    <VoteView/>

  </ThemeProvider>


    
  );
}

export default App;
