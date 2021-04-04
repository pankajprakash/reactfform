import './App.css';

import TopHead from './Components/TopHead'
import FormPage from './Components/FormPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login'
import Signupdata from './Components/Signupdata';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={TopHead } />
            <Route  exact path="/signup" component={Signup} />
            <Route  exact path="/Login" component={Login} />
            <Route  exact path="/signupdata" component={Signupdata} />
            

        </Switch>
      </Router>
    
    
    </div>
  );
}

export default App;
