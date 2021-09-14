import './App.css';
import React , {useState} from "react"
import Navbar from "./components/Navbar";
import TextForm from './components/textForm';
import Alert from './components/Alert';
// import About from "./components/About";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
// }from "react-router-dom";
function App() {

  const [mode, setmode] = useState("dark");
  const [alert, setAlert] = useState(null);


  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }


  const toggleMode = ()=>{
    if (mode==="light") {
       setmode("dark");
       document.body.style.backgroundColor="black";
       showAlert("Dark mode has been enabled","success");
       document.title="React App - dark Mode";
      setInterval(() => {
        document.title="React App - enter text to use"
      }, 2000);
      } else {
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      document.title="React App - Light Mode"
    }
  }
  return(
    <>
    {/* <Router> */}
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className = "container my-3">
      {/* <Switch>
        <Route path="/about">
          <About mode={mode}/>
        </Route>
        <Route path="/"> */}
          <TextForm mode={mode} showAlert={showAlert}/>      
        {/* </Route>
      </Switch> */}
    </div>
    {/* </Router> */}
    </>
  )
}
export default App;

