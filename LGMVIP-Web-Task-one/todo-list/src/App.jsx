import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Task from "./Task";
import Home from "./Home";

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='content'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/task' component={Task} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
