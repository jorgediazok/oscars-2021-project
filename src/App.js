import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Home from './pages/Home';
import Game from './pages/Game';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/jugar" component={Game} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
