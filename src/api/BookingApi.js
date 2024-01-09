import React, { useState, useEffect } from "react";
import axios from "axios";
import { BEST_TICKET_API } from "../utility/AppConstant.js";

export const findAllBookings = async () => {
  let result = null;
  try {
    result = await axios.get(`${BEST_TICKET_API}/bookings`);
    console.log(`${BEST_TICKET_API}/bookings`);
  } catch (e) {
    console.log("Find bookings API error: " + e);
  }
  return result;
};

// Rest of the component code...
