import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Router>
               <Switch>
                   <Route path="/" exact component={Home}/>
                   <Route path="/login" exact component={Login}/>
                   <Route path="/register" component={Register}/>
               </Switch>
           </Router>
    </div>
  );
}

export default App;
