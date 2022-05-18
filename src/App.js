import logo from './logo.svg';
import './App.css'; 
import Data from './Data';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Completed from './Completed';
import Ongoing from './Ongoing';
function App() {
  return (
    
    <div className="App">
    <Router>
   
    
  
  <Switch>
  
  <Route exact path="/" component={Completed} />
  <Route path="/ongoingtask" component={Ongoing} />
 
  
  </Switch>
  
  </Router>     
    
     
    
  
    </div>
  );
}

export default App;
