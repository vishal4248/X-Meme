import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Create from './pages/Create';
import NotFound from './pages/NotFound';
import Footer from './pages/Footer';
import MemeDetails from './memes/MemeDetails';

function App() {
  return (

    <Router>
      <div className="App">

        <Navbar/>
        
        <div className="content">
          
          <Switch>
            
            <Route exact path='/'>
              <Home/>
            </Route>
            
            <Route path='/create'>
              <Create/>
            </Route>

            <Route path='/memes/:id'>
              <MemeDetails/>
            </Route>

            <Route path='*'>
              <NotFound/>
            </Route>
          
          </Switch>
        </div>

        <Footer/>
      
      </div>
    </Router>
    
    

  );
}

export default App;
