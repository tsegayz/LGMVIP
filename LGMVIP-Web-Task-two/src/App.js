import axios from "axios";
import { useState, useEffect } from "react";

function App() {
	const [users, setUsers] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get("https://reqres.in/api/users?page=1");
			const usersData = response.data.data;
			setUsers(usersData);
			console.log(usersData);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='container'>
			<div className='navbar'>
				<div className='logo'>
					<h1>
						L<span>GM VIP</span>
					</h1>
				</div>
				<div>
					<ul className='menu'>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/trips'>Trips</a>
						</li>
						<li>
							<a href='/trips'> Get Users </a>
						</li>
					</ul>
				</div>
			</div>
			<div className='user-card'></div>
		</div>
	);
}

export default App;
