const menuItems = [
	{ text: "Home", link: "/" },
	{ text: "Announcement", link: "/announcement" },
	{
		text: "Admission",
		link: "/admission",
		options: ["Option 1", "Option 2", "Option 3"],
	},
	{ text: "Freshman", link: "/freshman" },
	{
		text: "Programs",
		link: "/programs",
		options: ["Option 1", "Option 2", "Option 3"],
	},
];

function NavBar() {
	return (
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
										{["Admission", "Programs"].includes(item.text) && (
											<span className='arrow' style={{ fontSize: "13px" }}>
												&#9660;
											</span>
										)}
									</a>
								</div>
								{["Admission", "Programs"].includes(item.text) && (
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
	);
}

export default NavBar;
