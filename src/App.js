import Navbar from './Navbar.js';
import Home from './Home.js';
import Create from './Create.js';
import BlogDetails from './BlogDetails.js';
import NotFound from './NotFound.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';     // For React Router Handling
// The code written below in jsx not HTML
// JSX helps to write this html style templates and components easily 
// and then in background, Babble convert these jsx codes to html

// To put any variable in jsx template code, write it inside {}

function App()                                      // Function name should start as capital letters
{
  return (                                        // JSX Template code starts
    <Router>
      <div className="App">
        <Navbar /> 
        <div className="content">
            <Switch>                             {/*All of our routes goes under this Switch Component */}
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/create">
                <Create />
              </Route>
              <Route exact path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">        {/* This route should go at the bottom as it will catch any other route if the above routes are not matchec by using an ashtricks(*) */}
                <NotFound />
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

