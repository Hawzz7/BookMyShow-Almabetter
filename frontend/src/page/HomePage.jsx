import React, { useMemo, useState } from "react";
import MovieSelect from "../components/MovieSelect";
import TimeSelect from "../components/TimeSelect";
import SeatSelect from "../components/seatSelect";
import GetLastBookings from "../components/GetLastBookings";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../store/Slice";
import { newBooking } from "../api-helpers/Api-helpers";
import Modal from "../components/Modal";

const HomePage = () => {
  //This function is used to dispatch an action to update the store
  const dispatch = useDispatch();

  const [sharedData, setSharedData] = useState({
    movie: "",
    slot: "",
    seats: "",
  });
  console.log("data:", sharedData);

  //Here the data is coming from MovieSelect component and updating the state "sharedData"
  const movieData = (data) => {
    setSharedData({
      ...sharedData,
      movie: data,
    });
  };

  //Here the data is coming from TimeSelect component and updating the state "sharedData"
  const slotData = (data) => {
    setSharedData({
      ...sharedData,
      slot: data,
    });
  };

  //Here the data is coming from SeatSelect component and updating the state "sharedData"
  const seatsData = (data) => {
    setSharedData({
      ...sharedData,
      seats: data,
    });
  };

  //This function is used for checking the -ve value of seats
  const checkNegativeValueOfSeats = useMemo(() => {
    // Define a function that takes in a `seats` object
    return (seats) => {
      // Loop through each seat in the `seats` object
      for (let seat in seats) {
        // Check if the seat has a negative value
        if (Number(seats[seat]) < 0) {
          // If any seat has a negative value, return true
          return true;
        }
      }
      // If all seats have no negative values, return false
      return false;
    };
  }, []);

  //This function is used for checking if the seat value has zero value
  const checkZeroValueOfSeats = useMemo(() => {
    // Define a function that takes in a `seats` object
    return (seats) => {
      // Loop through each seat in the `seats` object
      for (let seat in seats) {
        // Check if the seat has a positive value
        if (Number(seats[seat]) > 0) {
          // If any seat has a positive value, return false
          return false;
        }
      }
      // If all seats have a zero value, return true
      return true;
    };
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleClick = () => {
    //If all the switch cases are true then a modal will appear with the respected error message
    switch (true) {
      case !sharedData.movie:
        setShowModal(true);
        setErrorMsg("Please select a movie!");
        break;
      case !sharedData.slot:
        setShowModal(true);
        setErrorMsg("Please select a time!");
        break;
      case checkNegativeValueOfSeats(sharedData.seats) ||
        checkZeroValueOfSeats(sharedData.seats):
        setShowModal(true);
        setErrorMsg("Invalid seat inputs!");
        break;
      default:
        //If all the above conditions are satisfied then it will save the booking data in localstorage
        {
          dispatch(addBooking({ ...sharedData }))
          
            //This will save the data in the backend using the api call function "newBooking"
            newBooking({ ...sharedData })
              .then((res) => {
                console.log(res.booking),
                  setErrorMsg(res.message),
                  setShowModal(true);
              })
              .catch((err) => console.log(err));
        }

        // This will reset all the data after 2 seconds
        setTimeout(() => {
          location.reload();
        }, 1000);
    }
  };

  return (
    <div className="flex flex-col gap-5 px-6 pt-4 pb-6 border-2 border-black rounded-md shadow-2xl bg-emerald-200">
      <div className="flex flex-wrap-reverse gap-5">
        <Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          errormsg={errorMsg}
        />
        <MovieSelect movieToHome={movieData} />
        <GetLastBookings />
      </div>
      <TimeSelect slotToHome={slotData} />
      <SeatSelect seatsData={seatsData} />
      <div>
        <button
          className="border-2 border-black rounded-[5px] px-4 py-1 bg-green-800 text-white hover:text-red-400 hover:border-none hover:ring-2 ring-red-700"
          onClick={handleClick}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
