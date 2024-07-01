import { useQuery } from "@tanstack/react-query";
import React from "react";

const useRoomsData = () => {
  const { data: roomData = [], refetch } = useQuery([], async () => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/170`);
    return res.json();
  });

  return [roomData, refetch];
};

export default useRoomsData;


