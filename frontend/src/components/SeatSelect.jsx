import React, { useEffect, useState } from "react";
import { seats } from "../data";
import SeatComponent from "./seatComponent";

const SeatSelect = ({ seatsData }) => {
  const [seat, setSeat] = useState([]);

  const [inputs, setInputs] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });

  useEffect(() => {
    setSeat([]);
    seatsData(inputs)
  }, [inputs]);



  return (
    <div className="flex flex-col gap-4 p-4 border-2 border-black rounded-md">
      <h1 className="flex font-serif font-bold">Select Seats :-</h1>
      <div className="flex flex-wrap gap-4">
        {seats.map((val, index) => {
          return (
            <SeatComponent
              seatName={val}
              key={index}
              index={index}
              seat={seat}
              setSeat={setSeat}
              inputs={inputs}
              setInputs={setInputs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SeatSelect;
