import { LuClipboardEdit } from "react-icons/lu";
import { AiFillPrinter, AiOutlineSchedule } from "react-icons/ai";
import { useState } from "react";

const menuItems = [
	{ text: "Home", link: "/" },
	{
		text: "Registration",
		link: "/registration",
		options: ["Option 1", "Option 2", "Option 3"],
	},
	{
		text: "Admission",
		link: "/admission",
		options: ["Option 1", "Option 2", "Option 3"],
	},
	{
		text: "Grade & Results",
		link: "/gradeResult",
		options: ["Option 1", "Option 2", "Option 3"],
	},
	{
		text: "Student Services",
		link: "/studentservices",
		options: ["Option 1", "Option 2", "Option 3"],
	},
];

const navigation = [
	{
		icon: <LuClipboardEdit />,
		title: "Cost Sharing Form",
		link: "costSharing",
	},
	{
		icon: <AiFillPrinter />,
		title: "Course Registration",
		link: "courseRegistration",
	},
	{
		icon: <AiOutlineSchedule />,
		title: "Bank Account",
		link: "bankAccount",
	},
	{
		icon: <AiOutlineSchedule />,
		title: "Course Add/Drop",
		link: "addDrop",
	},
];
function Registration() {
	const [selectedButton, setSelectedButton] = useState(null);

	const courses = ["Math", "Science", "History", "Literature", "Art"];
	const instruction = [
		"1. This is a form where students can register for courses in each active semister",
		"2. Select and submit those courses for which you need to register",
		"3. Once submitted you cannot modify so select the course/s carefully",
	];

	const handleButtonClick = (content) => {
		setSelectedButton(content);
	};

	const renderContent = () => {
		if (selectedButton === "Instruction") {
			return (
				<ul>
					<h2> To Register for Courses</h2>
					{instruction.map((inst, index) => (
						<div key={index}>{inst}</div>
					))}
				</ul>
			);
		} else if (selectedButton === "Course Registration") {
			return (
				<ul>
					{courses.map((course, index) => (
						<li key={index}>
							<input type='checkbox' />
							{course}
						</li>
					))}
				</ul>
			);
		} else {
			return "No course to register for the semester";
		}
	};

	return (
		<div className='registraion'>
			<div className='navbar'>
				<div className='logo'>
					<h1>
						L<span>GMVIP</span>
					</h1>
				</div>
				<div>
					<ul className='menu'>
						<div className='menu-left'>
							{menuItems.map((item, index) => (
								<li className='dropdown' key={index}>
									<div className='dropdown-btn'>
										<a href={item.link} className='menu-link'>
											{item.text}
											{[
												"Admission",
												"Registration",
												"Grade & Results",
												"Student Services",
											].includes(item.text) && (
												<span className='arrow' style={{ fontSize: "13px" }}>
													&#9660;
												</span>
											)}
										</a>
									</div>
									{[
										"Admission",
										"Registration",
										"Grade & Results",
										"Student Services",
									].includes(item.text) && (
										<div className='dropdown-content'>
											<ul className='sub-menu'>
												{item.options.map((option, optionIndex) => (
													<li key={optionIndex}>
														<a href={`${item.link}-option${optionIndex + 1}`}>
															{option}
														</a>
													</li>
												))}
											</ul>
										</div>
									)}
								</li>
							))}
						</div>
					</ul>
				</div>
			</div>
			<div className='container'>
				<div className='sidebar'>
					<div className='navigation'>Navigation</div>
					{navigation.map((item) => (
						<ul>
							<li>
								<span> {item.icon} </span>
								<a href={item.link}> {item.title} </a>
							</li>
						</ul>
					))}
				</div>
				<div className='content'>
					<div className='reg'>
						<h3> Course Registration</h3>
						<ul className='user-info'>
							<li>
								<h2> Full Name</h2> <span> Tsega yaekob</span>
							</li>
							<li>
								<h2> ID No. </h2> <span> UGR/8609/12</span>
							</li>
							<li>
								<h2> Program </h2>
								<span> SITE</span>
							</li>
						</ul>
					</div>
					<div className='options'>
						<div className='buttons'>
							<button
								className={selectedButton === "Instruction" ? "selected" : ""}
								onClick={() => handleButtonClick("Instruction")}
							>
								Instruction
							</button>
							<button
								className={
									selectedButton === "Course Registration" ? "selected" : ""
								}
								onClick={() => handleButtonClick("Course Registration")}
							>
								Course Registration
							</button>
						</div>

						<div className='result'>{renderContent()}</div>
					</div>
                    <button className="submit"> Submit </button>
				</div>
			</div>
		</div>
	);
}
export default Registration;
