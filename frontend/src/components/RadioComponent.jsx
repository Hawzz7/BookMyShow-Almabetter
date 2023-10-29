import React, { useState } from "react";
import "../css/RadioComponent.css";

const RadioComponent = ({ text, changeSelectedMovie, }) => {

  const [state, setState] = useState()
 

  //This function will change the button selection of movie.
  const handleChange = (val) => {
    setState(val)
    console.log(val);
    changeSelectedMovie(val);
  };

  return (
    <div>
      {/* <input
        value={text}
        type="button"
        className="border-2 rounded-[5px] border-black font-semibold px-[10px] hover:bg-lime-400 hover:ring-[2px] hover:ring-red-600 hover:border-none active:bg-lime-600 focus:bg-lime-800 focus:text-white bg-lime-200"
        onClick={() => handleChange(text)}
      /> */}

      <div className ="bg-gray-200 rounded-lg">
        <div className ="inline-flex rounded-lg">
          <input
            type="radio"
            name="room_type"
            id={text}
            checked
            hidden
            onChange={()=> handleChange(text)}
          />
          <label
            htmlFor={text}
            className ="self-center px-4 py-2 text-center rounded-lg cursor-pointer radio hover:opacity-75"
            
          >
            {text}
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioComponent;
