import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    fetch("../../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setRoomsData(data));
  }, []);

  console.log(roomsData);

  return (
    <div>
      <h2 className="text-4xl font-semibold mt-4">Your rented Room</h2>

      {roomsData.map((room, index) => (
        <table className="table">
          <thead>
            <th>Name</th>
            <td>Phone</td>
            <td>Email</td>
            <td>Booked Room</td>
            <td>User block</td>
          </thead>
          <tbody>
            <tr>
              <td>MD. Rabbi Mia</td>
              <td>01303329413</td>
              <td>codersrabbi@gmail.com</td>
              <td>
                <button className="btn btn-success">View</button>
              </td>
              <td>
                <button className="btn btn-error">Block</button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default ManageUsers;
