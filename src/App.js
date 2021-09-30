import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import NotFound from './Components/NotFound/NotFound'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Components/Header/Header';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Culture from './Components/Culture/Culture';



function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route path='/Home'>
            <Home></Home>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>
            <Route path='/friend/:friendId'>
              <FriendDetail></FriendDetail>
            </Route>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/about/culture'>
            <Culture></Culture>
          </Route>
          <Route exact path='/'></Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
