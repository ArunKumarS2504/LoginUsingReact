import logo from './logo.svg';
import './App.css';
import React, {useState, useCallback} from "react"
import { AuthProvider, useAuth} from './components/AuthContext';
import dashboard from './components/dashboard';
import Login from './components/app/Login';
import Signup from './components/Signup';


function App() {
  let[popupstyle, setPoppustyle]= useState({visibility:"visible"})
  let [compo,setcompo] = useState(<Login/>)

  

  return (
    <div className="App">
      <div className="header">
       <div className="btnBack"> 
       <button onClick={ () => {setPoppustyle({visibility:"visible"});setcompo(<Login/>)}}>Login</button>
       <button onClick={ () => {setPoppustyle({visibility:"visible"});setcompo(<Signup/>)}}>Signup</button>
       </div>
      </div>

      <div className="popupBack" style={popupstyle}>
        <div className="blurBack" onClick={() => {setPoppustyle({visibility : hidden})}}></div>
        {compo}
      </div>
    </div>
  );
}

export default App;
