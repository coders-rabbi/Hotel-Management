import { useQuery } from "@tanstack/react-query";

const useBookingData = () => {
  const { data: bookingData = [], refetch } = useQuery(
    ["booking"],
    async () => {
      const res = await fetch("http://localhost:5000/booking");
      return res.json();
    }
  );
  return [bookingData, refetch];
};

export default useBookingData;



