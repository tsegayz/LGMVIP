import { LuClipboardEdit } from "react-icons/lu";
import { AiFillPrinter, AiOutlineSchedule } from "react-icons/ai";

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
		title: "Registration",
		link: "registration",
	},
	{
		icon: <AiFillPrinter />,
		title: "Grade & Results",
		link: "gradeResult",
	},
	{
		icon: <AiOutlineSchedule />,
		title: "schedule",
		link: "Schedule",
	},
];
function Student() {
	return (
		<div className='student'>
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
					<div className='user-profile'>
						<h3> My Profile </h3>
						<ul>
							<li>
								<h2> Full Name</h2> <span> Tsega yaekob</span> 
							</li>
							<li>
								<h2> ID No. </h2> <span> UGR/8609/12</span> 
							</li>
							<li>
								<h2> Departement </h2><span> SITE</span> 
							</li>
							<li>
								<h2> Year</h2> <span> Year 5</span> 
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Student;
