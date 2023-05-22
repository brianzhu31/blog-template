import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Card from './components/Card';
import Home from './pages/home';
import Menu from './components/Menu';
import Clubs from './pages/clubs';
import Events from './pages/events';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  let [menuOn, setMenuOn] = useState(false) //react state that stores whether the menu is on or off
  let [menuIcon, setMenuIcon] = useState('Menu')

  return (
    <>
      <Router>
        <Navbar menuOn={menuOn} menuIcon={menuIcon} toggleMenu={menuOn => setMenuOn(menuOn)} toggleMenuIcon={menuIcon => setMenuIcon(menuIcon)}/>
          {/* passes setMenuOn and setMenuIcon to Navbar component, allows Navbar to toggle the menu and change the state of menuOn*/}
        <div className='site-container'>
          <Sidebar />
          <Switch>
            {/* Define new page routes here */}
            <Route path='/' exact component={Home} />
            <Route path='/clubs' exact component={Clubs} />
            <Route path='/events' exact component={Events} />
          </Switch>
        </div>
        <Menu menuOn={menuOn} toggleMenu={menuOn => setMenuOn(menuOn)} toggleMenuIcon={menuIcon => setMenuIcon(menuIcon)}/>
        {/* Menu component re-renders after a change in state caused by Navbar toggle menuOn */}
        {/* passes setMenuOn and setMenuIcon to Menu component, allows Menu to toggle the menu and change the state of menuOn*/}
      </Router>
    </>
  );
}

export default App;