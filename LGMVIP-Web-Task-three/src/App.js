import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { useState } from "react";

function App() {
	const [selectedGender, setSelectedGender] = useState("");
	const [selectedSkill, setSelectedSkill] = useState("");
	const [uploadedImage, setUploadedImage] = useState(null);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [website, setWebsite] = useState("");
	const [enrolledStudents, setEnrolledStudents] = useState([]);
	const skillsList = ["HTML", "Java", "CSS"];

	const handleGenderSelection = (gender) => {
		setSelectedGender(gender);
	};

	const handleSkillSelection = (skill) => {
		if (selectedSkill.includes(skill)) {
			setSelectedSkill(selectedSkill.filter((s) => s !== skill));
		} else {
			setSelectedSkill([...selectedSkill, skill]);
		}
	};

	const handlePhotoUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setUploadedImage(imageUrl);
		}
	};

	const handlePhotoChange = () => {
		setUploadedImage(null);
	};

	const handleClear = () => {
		setUploadedImage(null);
		setSelectedGender("");
		setSelectedSkill("");
		setName("");
		setEmail("");
		setWebsite("");
	};

	const handleEnroll = () => {
		const studentData = {
			name: name,
			email: email,
			website: website,
			gender: selectedGender,
			skills: selectedSkill,
			image: uploadedImage,
		};
		setEnrolledStudents([...enrolledStudents, studentData]);
	};

	return (
		<div className='registration-form'>
			<div className='part-one'>
				<div className='first-row'>
					<div className='col'>
						<input
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<span className='placeholder'>Name</span>
					</div>
					<div className='col'>
						<div className='avatar'>
							{uploadedImage ? (
								<div>
									<img
										src={uploadedImage}
										alt='Uploaded'
										style={{
											width: "50px",
											height: "40px",
											marginLeft: "-10px",
											marginTop: "-10px",
										}}
									/>
									<button
										onClick={handlePhotoChange}
										style={{
											width: "5em",
											backgroundColor: "white",
											border: "none",
											position: "absolute",
											right: "0px",
											top: "0",
											padding: "5px 10px",
										}}
									>
										Change Photo
									</button>
								</div>
							) : (
								<label htmlFor='photoInput'>
									<FaCameraRetro />
								</label>
							)}
							<input
								type='file'
								id='photoInput'
								accept='image/*'
								style={{ display: "none" }}
								onChange={handlePhotoUpload}
							/>
						</div>
						{uploadedImage ? (
							<span>Loaded Photo</span>
						) : (
							<span>Upload Photo</span>
						)}
					</div>
				</div>
				<div className='first-row'>
					<div className='col'>
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<span className='placeholder'>Email</span>
					</div>
					<div className='col'>
						<input
							type='text'
							value={website}
							onChange={(e) => setWebsite(e.target.value)}
						/>
						<span className='placeholder'>Website</span>
					</div>
				</div>
				<div className='first-row'>
					<div className='col'>
						<div className='gender-buttons'>
							<div className='title'>
								<span> Gender</span>
							</div>
							<div className='button'>
								<button
									className={selectedGender === "male" ? "selected" : ""}
									onClick={() => handleGenderSelection("male")}
								>
									Male
								</button>
								<button
									className={selectedGender === "female" ? "selected" : ""}
									onClick={() => handleGenderSelection("female")}
								>
									Female
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='first-row'>
					<div className='col-last'>
						<span>Skills</span>
						<div className='col-check'>
							{skillsList.map((skill) => (
								<div key={skill} className='check'>
									<input
										type='checkbox'
										id={skill}
										checked={selectedSkill.includes(skill)}
										onChange={() => handleSkillSelection(skill)}
									/>
									<label htmlFor={skill}>{skill}</label>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='handlers'>
					<button className='enroll' onClick={() => handleEnroll()}>
						Enroll Student
					</button>
					<button className='clear' onClick={() => handleClear()}>
						Clear
					</button>
				</div>
			</div>
			<div className='part-two'>
				<h2>Enrolled Students</h2>
				{enrolledStudents.map((student, index) => (
					<div key={index} className='enrolled-student'>
						<h3> Name: {student.name}</h3>
						<p>Email: {student.email}</p>
						<p>Website: {student.website}</p>
						<p>Gender: {student.gender}</p>
						<p>Skills: {student.skills.join(", ")}</p>
						{student.image && (
							<img
								src={student.image}
								alt={student.name}
								style={{ width: "50px", height: "50px" }}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
