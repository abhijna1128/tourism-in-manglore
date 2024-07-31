import axios from 'axios';

const API_URL = 'http://localhost:5001/api/bookings';

export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post(API_URL, bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
