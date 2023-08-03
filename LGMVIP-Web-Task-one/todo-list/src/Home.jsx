import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import {
	BsBell,
	BsPlayFill,
	BsThreeDotsVertical,
	BsPersonCircle,
	BsPlus,
} from "react-icons/bs";
import { MdClose, MdEmail } from "react-icons/md";
import { TiTickOutline, TiDelete } from "react-icons/ti";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Home() {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [selectedDate, setSelectedDate] = useState(new Date()); // Set initial selectedDate as today
	const [selectedCategory, setSelectedCategory] = useState("Recently");
	const [selectedTaskIndex, setSelectedTaskIndex] = useState(-1);
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const showButtonsForTask = (index) => {
		if (selectedTaskIndex === index) {
			setSelectedTaskIndex(-1); // If the icon is clicked again, hide the buttons
		} else {
			setSelectedTaskIndex(index);
		}
	};

	const addTodo = () => {
		if (inputValue.trim() !== "") {
			const newTodo = {
				task: inputValue,
				date: selectedDate,
				done: false,
			};
			setTodos([...todos, newTodo]);
			setInputValue("");
		}
		toggleModal();
	};

	const deleteTodo = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	const recentlyTasks = () => {
		const today = new Date();
		return todos.filter((todo) => {
			const todoDate = new Date(todo.date);
			return (today.getTime() - todoDate.getTime()) / (1000 * 3600 * 24) <= 3;
		});
	};

	const todayTasks = () => {
		const today = new Date();
		const todayDateString = today.toDateString();
		return todos.filter((todo) => todo.date === todayDateString);
	};

	const upcomingTasks = () => {
		const today = new Date();
		return todos.filter((todo) => {
			const todoDate = new Date(todo.date);
			return today.getTime() < todoDate.getTime();
		});
	};
	const markTaskAsDone = (index) => {
		if (todos[index]) {
			const updatedTodos = [...todos];
			updatedTodos[index].done = true;
			setTodos(updatedTodos);
		}
	};

	const getCategoryTasks = () => {
		switch (selectedCategory) {
			case "Recently":
				const recentAndDoneTasks = recentlyTasks();
				return [...recentAndDoneTasks];
			case "Today":
				return todayTasks();
			case "Upcoming":
				return upcomingTasks();
			case "Done":
				return todos.filter((todo) => todo.done);
			default:
				return [];
		}
	};

	return (
		<div className='home'>
			<h1> ToDo List </h1>
			<h4> You have got 3 tasks today </h4>
			<div className='search-bar'>
				<button className='search-icon'>
					<RiSearch2Line
						style={{ color: "rgb(0, 21, 78)", fontSize: "25px" }}
					/>
				</button>
				<input
					className='input-field'
					type='text'
					placeholder='Search your tasks .....'
				/>
			</div>
			<section className='todo-list'>
				<h2> My Tasks </h2>
				<ul>
					{["Recently", "Today", "Upcoming", "Done"].map((category) => (
						<li
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={selectedCategory === category ? "selected" : ""}
						>
							{category}
						</li>
					))}
				</ul>
			</section>
			<section className='part-two'>
				{getCategoryTasks().map((todo, index) => (
					<div key={index} className='task-card'>
						<BsThreeDotsVertical
							onClick={() => showButtonsForTask(index)}
							style={{
								position: "absolute",
								right: "45.6em",
								marginTop: "10px",
								fontSize: "23px",
							}}
						/>
						<h2>{todo.task} </h2>
						<p>Date: {new Date(todo.date).toLocaleDateString()}</p>
						{selectedTaskIndex === index && (
							<div className='option-buttons'>
								{!todo.done ? (
									<button onClick={() => markTaskAsDone(index)}>
										<TiTickOutline style={{ fontSize: "20px", margin: "0" }} />
										done
									</button>
								) : (
									<span>Done</span>
								)}
								<button onClick={() => deleteTodo(index)}>
									<TiDelete style={{ fontSize: "20px", margin: "0" }} />
									delete
								</button>
							</div>
						)}
					</div>
				))}
			</section>
			<div className='sidebar'>
				<div className='user-profile'>
					<BsPersonCircle style={{ fontSize: "50px" }} />
					<div className='name'>
						<h4> Jessica lockwood </h4>
						<p> UI/UX Designer </p>
					</div>
					<div className='icons'>
						<BsBell style={{ marginRight: "10px" }} />
						<MdEmail />
					</div>
				</div>
				<div className='timetracker'>
					<div>
						<h2> Task Time Tracker </h2>
						<p> You can start tracking </p>
					</div>
					<BsPlayFill
						style={{
							backgroundColor: "rgb(238, 179, 29)",
							padding: "10px",
							fontSize: "50px",
							borderRadius: "13px",
						}}
					/>
				</div>
				<div>
					<div className='date-container'>
						<div className='date'>
							<div className='number'>
								<p>
									{new Date().toLocaleString("en-US", {
										month: "long",
										day: "numeric",
										year: "numeric",
									})}
								</p>
								<h2>{selectedCategory}</h2>
							</div>
							<button onClick={toggleModal}>
								
								<BsPlus style={{ fontSize: "29px" }} /> Add task
							</button>
						</div>
						{getCategoryTasks().map((todo, index) => (
							<div key={index} className='task-card'>
								<h2>{todo.task} </h2>
								<p>Date: {new Date(todo.date).toLocaleDateString()}</p>
							</div>
						))}
					</div>
					<Modal
						className='modal'
						isOpen={showModal}
						onRequestClose={toggleModal}
						contentLabel='Add Task Modal'
					>
						<button className='close' onClick={toggleModal}>
							<MdClose />
						</button>
						<h3> Add new task </h3>
						<input
							type='text'
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder='Add a new todo...'
						/>
						<h2> Select the date</h2>
						<DatePicker
							className="datepicker"
							selected={selectedDate}
							onChange={(date) => setSelectedDate(date)}
							placeholderText='Select a date...'
						/>
						<button className='add' onClick={addTodo}>
							<BsPlus style={{ fontSize: "29px" }} /> Add
						</button>
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default Home;
