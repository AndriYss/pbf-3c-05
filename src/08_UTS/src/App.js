import react from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}
export default App;
