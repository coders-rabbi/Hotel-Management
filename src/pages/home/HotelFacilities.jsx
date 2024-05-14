import image01 from "../../assets/Facilities/image-10.jpg";
import "./BackgroundImage.css";

const HotelFacilities = () => {
  return (
    <div className="max-w-screen-xl m-auto grid grid-cols-3 items-center mt-20">
      <div className="col-span-2">
        <h3 className="uppercase text-[#BF9B79] mb-10">hotel Facilities</h3>
        <h1 className="text-5xl mb-7">Best Rooms & Suites</h1>
        <div className="flex justify-center items-center gap-10">
          <p className="leading-8">
            Etiam malesuada sit amet quam ac imperdiet. Nullam auctor odio
            augue, in finibus risus luctus ac. Curabitur eu nulla urna. Nunc sit
            amet libero nibh.
          </p>
          <p className="leading-8">
            Quisque vitae urna eget orci fermentum condimentum in quis neque.
            Donec tortor elit, auctor a massa non, fringilla auctor lorem. Cras
            mauris ex, finibus conse.
          </p>
        </div>
        <button className="text-xl px-8 py-2 bg-[#353535] text-white mt-5">
          View All
        </button>
      </div>
      <div className="">
        <img className="w-[450px]" src={image01} alt="" />
      </div>

      <div className="grid col-span-2">
        <div className="grid grid-cols-4 gap-4">
          <div className="img-01 h-60 flex justify-center items-center">
            <div className="text-white">
              <p className="text-2xl font-semibold text-center bg-[#BF9B79] py-1 mb-9">
                1500TK
              </p>
              <p className="text-3xl font-semibold uppercase">Lake View</p>
            </div>
          </div>
          <div className="img-02 h-60 flex justify-center items-center">
            <div className="text-white">
              <p className="text-2xl font-semibold text-center bg-[#BF9B79] py-1 mb-9">
                2000TK
              </p>
              <p className="text-3xl font-semibold uppercase">City View</p>
            </div>
          </div>
          <div className="img-03 h-60 flex justify-center items-center">
            <div className="text-white">
              <p className="text-2xl font-semibold text-center bg-[#BF9B79] py-1 mb-9">
                2500TK
              </p>
              <p className="text-3xl font-semibold uppercase">Small Suite</p>
            </div>
          </div>
          <div className="img-04 h-60 flex justify-center items-center">
            <div className="text-white">
              <p className="text-2xl font-semibold text-center bg-[#BF9B79] py-1 mb-9">
                3200TK
              </p>
              <p className="text-3xl font-semibold uppercase">King Room</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelFacilities;
