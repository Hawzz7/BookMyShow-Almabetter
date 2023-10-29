import { createSlice, combineReducers } from "@reduxjs/toolkit";

const BookingSlice = createSlice({
  name: "BookingDetails",
  initialState: {
    bookingDetail: localStorage.getItem("bookingDetail")
    ? JSON.parse(localStorage.getItem("bookingDetail"))
    : [],

    movieDetail: localStorage.getItem("movieDetail")
      ? JSON.parse(localStorage.getItem("movieDetail"))
      : [],

    slotDetail: localStorage.getItem("slotDetail")
      ? JSON.parse(localStorage.getItem("slotDetail"))
      : [],

    seatDetail: localStorage.getItem("seatDetail")
      ? JSON.parse(localStorage.getItem("seatDetail"))
      : [],
  },
  reducers: {
    addMovie(state, action) {
      state.movieDetail.splice(0, 1, {
        movie: action.payload,
      });
      localStorage.setItem("movieDetail", JSON.stringify(state.movieDetail));
    },

    addSlot(state, action) {
      state.slotDetail.splice(0, 1, { 
        slot: action.payload });
      localStorage.setItem("slotDetail", JSON.stringify(state.slotDetail));
    },

    addSeat(state, action) {
      state.seatDetail.splice(0, 1, { 
        seats: action.payload });
      localStorage.setItem("seatDetail", JSON.stringify(state.seatDetail));
    },

    addBooking(state, action) {
      state.bookingDetail.splice(0, 1, { 
        bookingDetails: action.payload });
      localStorage.setItem("bookingDetail", JSON.stringify(state.bookingDetail));
    },
  },
});

export default BookingSlice.reducer;

export const { addMovie, addSlot, addSeat, addBooking } = BookingSlice.actions;
