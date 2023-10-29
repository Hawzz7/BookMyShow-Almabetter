import React, { useEffect, useState } from "react";
import { seats } from "../data";
import { lastBookingDetails } from "../api-helpers/Api-helpers";


const GetLastBookings = () => {
  const [bookingDetails, setBookingDetails] = useState({
    movie: "",
    slot: "",
    seats: "",
  });

  useEffect(() => {
    //This function helps to get the last booking details from the backend by calling an api function "lastBookingDetails"
    lastBookingDetails()
      .then((res) => setBookingDetails(res.details))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex flex-col gap-1 p-2 border-2 border-black rounded-md">
        <h1 className="flex justify-center font-serif font-bold">
          Last Booking Details :-
        </h1>
        {/* Here if any data is there in the state "bookingDetails" then it will render the data of the details or if data is not there in the state then it will show the "No previous booking found" */}
        {bookingDetails ? (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p className="font-semibold text-indigo-500">Movie:</p>
              <p className=" font">{bookingDetails.movie}</p>
            </div>
            <div className="flex justify-center gap-2">
              <h1 className="font-semibold text-indigo-500">Seats:</h1>

              <ol>
                {seats.map((seatName, index) => {
                  return (
                    <li key={index}>
                      <div className="">
                        {seatName}:{Number(bookingDetails.seats[seatName])}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="flex justify-center gap-2">
              <p className="font-semibold text-indigo-500">Slot:</p>
              <p>{bookingDetails.slot}</p>
            </div>
          </div>
        ) : (
          <p className="font-mono ">No Previous Booking Found!</p>
        )}
      </div>
    </>
  );
};

export default GetLastBookings;
