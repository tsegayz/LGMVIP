import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import Task from "./Task";
import Home from "./Home";

function App() {
	return (
		<div className='App'>
			<Router>
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/task' element={<Task />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
