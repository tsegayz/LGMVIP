import { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus, FaAsterisk, FaEquals } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { TiDivideOutline } from "react-icons/ti";
import { TbSlash } from "react-icons/tb";
import { BsDot } from "react-icons/bs";

import { create, all } from 'mathjs';

function App() {
const math = create(all);

	const inputRef = useRef(null);
	useEffect(() => {
	  inputRef.current.focus();
	}, []);
  
	const [num, setNum] = useState("");
	const [inputExpression, setInputExpression] = useState("");
	const [result, setResult] = useState(0);
  
	const handleOperator = (operator) => {
	  if (inputExpression.endsWith("+") || inputExpression.endsWith("-") || inputExpression.endsWith("*") || inputExpression.endsWith("/")) {
		setInputExpression(inputExpression.slice(0, -1) + operator);
	  } else if (num !== " ") {
		setInputExpression(inputExpression + num + operator);
		setNum(""); 
	  }
	};
  
	const handleResult = () => {
		if (num !== "") {
		  setInputExpression(inputExpression + num);
		  try {
			const calculatedResult = math.evaluate(inputExpression + num);
			setResult(calculatedResult);
			setNum("");
		  } catch (error) {
			console.error("Error evaluating expression:", error);
		  }
		}
	  };
	
  
	const handleClear = () => {
	  setNum("");
	  setInputExpression("");
	  setResult(0);
	};
  
	const handleNumberClick = (item) => {
	  if (typeof item === "number" || item === <BsDot />) {
		if (inputExpression.endsWith("+") || inputExpression.endsWith("-") || inputExpression.endsWith("*") || inputExpression.endsWith("/")) {
		  setInputExpression(inputExpression + item);
		} else {
		  setNum(num + item);
		}
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
		handler: () => handleOperator("*"),
	  },
	  {
		icon: <FaMinus />,
		handler: () => handleOperator("-"),
	  },
	  {
		icon: <FaPlus />,
		handler: () => handleOperator("+"),
	  },
	  {
		icon: <TiDivideOutline />,
		handler: () => handleOperator("/"),
	  },
	  {
		icon: <FaEquals />,
		handler: handleResult,
	  },
	];
  
	return (
	  <div className="container">
		<div className="calculator">
		  <input
			ref={inputRef}
			type="text"
			value={num !== "" ? num : inputExpression}
			onChange={(e) => setNum(e.target.value)}
		  />
		  {result ? (
			<div className="result">
			  = {result}
			</div>
		  ) : null}
		  <div className="buttons-container">
			<div className="col char-boxes">
			  {chars.map((item, index) => (
				<div key={index} className="box">
				  <button onClick={() => handleNumberClick(item)}>
					{item}
				  </button>
				</div>
			  ))}
			</div>
			<div className="col side">
			  {side.map((item, index) => (
				<div key={index} className="box">
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
