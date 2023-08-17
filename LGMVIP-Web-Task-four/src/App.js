import { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus, FaAsterisk, FaEquals } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { TiDivideOutline } from "react-icons/ti";
import { TbSlash } from "react-icons/tb";
import { BsDot } from "react-icons/bs";

function App() {
	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const [num, setNum] = useState("");
	const [result, setResult] = useState(0);

	const handleAdd = () => {
		setResult(result + parseFloat(num));
		setNum("");
	};

	const handleSub = () => {
		setResult(result - parseFloat(num));
		setNum("");
	};

	const handleMulti = () => {
		setResult(result * parseFloat(num));
		setNum("");
	};

	const handleDivide = () => {
		setResult(result / parseFloat(num));
		setNum("");
	};

	const handleResult = () => {
		setNum(result.toString());
	};

	const handleClear = () => {
		setNum("");
		setResult(0);
	};

	const handleNumberClick = (item) => {
		if (typeof item === "number" || item === <BsDot />) {
			setNum(num + item);
		} else if (item === "C") {
			handleClear();
		}
	};

	const chars = [
		"C",
		<FiDelete />,
		<TbSlash />,
		7,
		8,
		9,
		4,
		5,
		6,
		1,
		2,
		3,
		0,
		<BsDot />,
	];
	const side = [
		{
			icon: <FaAsterisk />,
			handler: handleMulti,
		},
		{
			icon: <FaMinus />,
			handler: handleSub,
		},
		{
			icon: <FaPlus />,
			handler: handleAdd,
		},
		{
			icon: <TiDivideOutline />,
			handler: handleDivide,
		},
		{
			icon: <FaEquals />,
			handler: handleResult,
		},
	];

	return (
		<div className='container'>
			<div className='calculator'>
				<input
					ref={inputRef}
					type='text'
					value={num}
					onChange={(e) => setNum(e.target.value)}
				/>
				{result ? <div>= {result}</div> : ""}
				<div className='buttons-container'>
					<div className='col char-boxes'>
						{chars.map((item, index) => (
							<div key={index} className='box'>
								<button onClick={() => handleNumberClick(item)}>{item}</button>
							</div>
						))}
					</div>
					<div className='col side'>
						{side.map((item, index) => (
							<div key={index} className='box'>
								<button onClick={item.handler}>{item.icon}</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
