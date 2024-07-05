import { useQuery } from "@tanstack/react-query";
import React from "react";

const useRoomsData = () => {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRoomsData(data));
  }, []);

  console.log(roomsData.image);

  return roomsData;
};

export default useRoomsData;
