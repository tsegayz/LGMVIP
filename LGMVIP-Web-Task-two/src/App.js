import axios from "axios";
import { useState, useEffect } from "react";

function App() {
	const [users, setUsers] = useState([]);
	const [showUserCards, setShowUserCards] = useState(false);
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		setLoading(true); // Start loading
		try {
			const response = await axios.get("https://reqres.in/api/users?page=1");
			const usersData = response.data.data;
			setUsers(usersData);
		} catch (error) {
			console.error("Error fetching user data:", error);
		} finally {
			setLoading(false); // Stop loading
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleUserClick = () => {
		setShowUserCards(!showUserCards);
	};

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
							<a href='/about'>About</a>
						</li>
						<li>
							<span onClick={handleUserClick}>
								{loading
									? "Loading..."
									: showUserCards
									? "Hide Users"
									: "Get Users"}
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div className='user-card'>
				{showUserCards && !loading && (
					<div className='user-cards'>
						<div className='user-grid'>
							{users.map((user) => (
								<div key={user.id} className='user-card-item'>
									<img
										src={user.avatar}
										alt={`${user.first_name} ${user.last_name}`}
									/>
									<p>
										Name: {user.first_name} {user.last_name}
									</p>
									<p>Email: {user.email}</p>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
