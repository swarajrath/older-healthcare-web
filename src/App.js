import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/navigation/Footer'
import TodoPage from './components/pages/TodoPage';
import BloodPressure from './components/pages/BloodPressure';
import Home from './components/pages/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import useAlan from './components/Alan/useAlan'


function App() {

  useAlan()
  
  return (
    <div className="App">
      <div className="content-wrap">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/todopage' component={TodoPage} />
            <Route path='/bloodpressuredetails' component={BloodPressure} />
            {/*<Route path="/achievements" component={Achievements} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} /> */}
          </Switch>
        </Router>
        </div>
        <Footer />
    </div>
  );
}

export default App;
