
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import NavBar from "./components/NavBar";
import Student from "./components/Student";

function App() {

	return (
		<div className='App'>
			<Router>
				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<NavBar />
							<Home/>
						</Route>
					</Switch>
					<Switch>
						<Route exact path='/student'>
							<Student/>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
