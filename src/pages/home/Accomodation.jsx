import { useState } from "react";
import image1 from "../../assets/homeImage/image-01.jpg";
import image2 from "../../assets/homeImage/image-2.jpg";

const Accomodation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // console.log(selectedDate);

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  return (
    <div className="max-w-screen-xl m-auto grid grid-cols-2 items-center gap-5 mt-28">
      <div className="relative flex">
        <img className="h-[650px] w-[600px]" src={image1} />
        <img
          className="absolute bottom-0 -left-12 w-[450px] h-64"
          src={image2}
        />
      </div>
      <div>
        <h6 className="text-[#C19B77] text-xl mb-12">Accomodations</h6>
        <h2 className="text-6xl text-black leading-[75px] font-semibold">
          Welcome to the Best <br /> Hotel In the City
        </h2>
        <p className="text-[15px] leading-7 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
          metus augue. Mauris ut libero eget erat scelerisque vehicula.
          Phasellus nec blandit metus. Nulla quis molestie risus. Nunc non
          auctor dui. In consequat augue eu eros luctus cursus. Nullam commodo
          nunc vel purus rhoncus ultrices. Suspendisse vitae neque.
        </p>
        <div className="mt-10">
          <form className="flex items-center justify-center gap-4" action="">
            <input
              className="text-5xl border-x-2 border-y-2 px-5 py-3 "
              type="date"
              value={selectedDate.toISOString().substring(0, 10)}
              onChange={handleDateChange}
            />
            <input
              className="text-white tracking-wider font-bold uppercase bg-[#C19B77]  h-20 py-3 px-4"
              type="submit"
              value="Availability"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
