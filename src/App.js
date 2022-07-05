import React from 'react'
import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import Create from './Create'
import BlogDetails from './BlogDetails';



function App() {

   
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          {//exact makes sure the path is the right one we're looking for and not just included in the url
          }
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/compose'>
            <Create />
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
