import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import MenuCard from './components/MenuCard/MenuCard';
import AboutUs from './components/About/AboutUs';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Switch>

              <Route exact path="/">
                <Home />
                <MenuCard />
                <AboutUs />
                <Footer />
              </Route>

              <Route path="/login">
                <Login />
              </Route> 

              <Route path="/register">
                <Register />
              </Route>   
          </Switch>
          
      </Router>
    </div>
  );
}

export default App;
