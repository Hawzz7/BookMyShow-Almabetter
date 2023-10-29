import React, { useEffect, useState } from "react";
import { addSeat } from "../store/Slice";
import { useDispatch, useSelector } from "react-redux";

const SeatComponent = ({
  seatName,
  index,
  seat,
  setSeat,
  inputs,
  setInputs,
}) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState("");

  useEffect(() => {
    setValues(inputs?.[seatName] || "");
  }, [inputs?.[seatName]]);

  const handleChangeSeats = (val) => {
    const newInput = val.target.value;
    setValues(newInput);
    setInputs({ ...inputs, [val.target.name]: Number(newInput) });
    dispatch(addSeat({ ...inputs, [val.target.name]: Number(newInput) }));
  };

  return (
    <div className="flex gap-2">
      <label className="flex font-semibold px-[10px]" htmlFor={index}>
        {seatName}
      </label>
      <input
        id={index}
        className="border-2 border-black rounded-[5px] px-3 py-[2px] w-[90px] font-semibold hover:bg-lime-400 hover:ring-[2px] hover:ring-red-600 hover:border-none active:bg-lime-600 focus:bg-red-400 focus:text-white bg-lime-200"
        min="0"
        max="20"
        type="number"
        placeholder="0"
        name={seatName}
        value={values}
        onChange={handleChangeSeats}
      />
    </div>
  );
};

export default SeatComponent;
