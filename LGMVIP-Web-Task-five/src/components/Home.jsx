import image from "../lets.png";
import { BsPersonFill, BsLock, BsFillPeopleFill } from "react-icons/bs";
import { GiNotebook, GiGraduateCap } from "react-icons/gi";
import { FaClipboard, FaLock } from "react-icons/fa";

const category = [
	{
		icon: <GiNotebook />,
		title: "Apply for exam",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores porro, quas libero voluptas possimus excepturi aperiam.",
	},
	{
		icon: <BsFillPeopleFill />,
		title: "Apply for Admission",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores porro, quas libero voluptas possimus excepturi aperiam.",
	},
	{
		icon: <FaClipboard />,
		title: "Upload Photo",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores porro, quas libero voluptas possimus excepturi aperiam.",
	},
	{
		icon: <GiGraduateCap />,
		title: "Alumni Services",
		desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum asperiores porro, quas libero voluptas possimus excepturi aperiam.",
	},
];
function Home() {
	return (
		<div className='home'>
			<div className='leftside'>
				<div className='span'>
					<span>T</span>
					<p>
						his portal is designed to provide services for students, applicants,
						academic staff and for those who play management role at the
						University
					</p>
				</div>

				{category.map((item) => (
					<div className='lists'>
						<span> {item.icon} </span>
						<div className='desc'>
							<h3> {item.title} </h3>
							<p> {item.desc} </p>
						</div>
					</div>
				))}
			</div>
			<div className='rightside'>
				<img src={image} alt='img' />
				<p
					style={{
						color: "rgb(56, 87, 133)",
						fontSize: "20px",
						textShadow: " 0 0 10px rgba(37, 64, 94, 0.568)",
					}}
				>
					Login to your account
				</p>
				<div className='conatiner'>
					<div className='part-one'>
						<BsPersonFill
							style={{
								color: "rgb(90, 90, 90)",
								padding: "5px",
								fontSize: "40px",
								margin: "10px",
								backgroundColor: "rgb(235, 235, 235)",
								borderRadius: "4px",
							}}
						/>
						<input type='text' placeholder='User name' />
					</div>
					<div className='part-two'>
						<FaLock
							style={{
								color: "rgb(90, 90, 90)",
								padding: "5px",
								fontSize: "40px",
								margin: "10px",
								backgroundColor: "rgb(235, 235, 235)",
								borderRadius: "4px",
							}}
						/>
						<input type='passowrd' placeholder='Password' />
					</div>
					<button className='login-button'>Login</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
