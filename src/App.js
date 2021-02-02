import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/navigation/Footer'
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <div className="content-wrap">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/skills' component={Skills} />
            <Route path='/projects' component={Projects} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        </div> */}
        <Footer />
    </div>
  );
}

export default App;
