import express from "express";
import { lastBookingDetails, newBooking } from "../controllers/bookingController";

const bookingRouter = express.Router();

bookingRouter.post("/", newBooking);
bookingRouter.get("/lastbooking", lastBookingDetails);

export default bookingRouter;