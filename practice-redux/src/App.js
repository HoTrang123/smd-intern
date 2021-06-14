import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './components/Home'
import GifsList from './components/GifsList'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Menu from './components/Menu'


function App() {
  return (

    <Router>
      <div className="container">
        {/* menu */}
        <Menu />
       
        {/* nội dung */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gif" component={GifsList} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />

        </Switch>

      </div>
    </Router>

  );
}

export default App;
