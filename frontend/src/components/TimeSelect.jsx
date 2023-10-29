import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSlot } from "../store/Slice";
import { slots } from "../data";

const TimeSelect = ({ slotToHome }) => {
  const dispatch = useDispatch();

  const [slotData, setSlotData] = useState("");

  const handleChangeTime = (e) => {
    //This is changing the state "slotData"
    setSlotData(e.target.value);

    //sending slotData to HomePage
    slotToHome(e.target.value);

    //This will save the selected slot to the localstorage
    dispatch(addSlot(e.target.value));
  };

  return (
    <>
      <div className="flex flex-col gap-4 border-[2px] border-black rounded-md p-4">
        <h1 className="flex font-serif font-bold">Select a time :-</h1>
        <div className="flex flex-wrap gap-4">
          {slots.map((time, index) => {
            return (
              <div key={index}>
                <div className="inline-flex rounded-lg ">
                  <input
                    id={time}
                    value={time}
                    type="radio"
                    checked={time === slotData}
                    className="sr-only"
                    onChange={handleChangeTime}
                  />
                  <label
                    htmlFor={time}
                    className="flex self-center px-4 py-2 text-center border-2 border-black rounded-lg cursor-pointer pool_type hover:opacity-80 bg-lime-200 hover:border-red-700 hover:bg-green-500"
                  >
                    {time}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeSelect;
