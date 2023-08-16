import React, { useRef, useEffect } from "react";
import {
  FaPlus,
  FaMinus,
  FaAsterisk,
  FaEquals,
} from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { TiDivideOutline } from "react-icons/ti";
import { TbSlash } from "react-icons/tb";
import { BsDot } from "react-icons/bs";

function App() {
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
    <FaAsterisk />,
    <FaMinus />,
    <FaPlus />,
    <TiDivideOutline />,
    <FaEquals />,
  ];

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='container'>
      <div className='calculator'>
        <input ref={inputRef} type='text' />
        <div className='buttons-container'>
          <div className='col char-boxes'>
            {chars.map((item, index) => (
              <div key={index} className='box'>
                <button>{item}</button>
              </div>
            ))}
          </div>
          <div className='col side'>
            {side.map((item, index) => (
              <div key={index} className='box'>
                <button>{item}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
