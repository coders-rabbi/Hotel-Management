import { FaHandPointRight } from "react-icons/fa";
import image01 from "../../assets/Facilities/image-10.jpg";
import image02 from "../../assets/Image/rabbi.jpg";

const About = () => {
  return (
    <div>
      <div className="aboutPage-banner flex justify-center items-center">
        <div>
          <h1 className="uppercase text-6xl text-white">About Us</h1>
        </div>
      </div>

      <div className="max-w-screen-xl m-auto grid grid-cols-3 items-center gap-10 mt-20">
        <div className="">
          <img className="w-[450px]" src={image01} alt="" />
        </div>

        <div className="col-span-2">
          <h3 className="uppercase text-[#BF9B79] mb-10">hotel Facilities</h3>
          <h1 className="text-5xl mb-7">The Best Accommodation</h1>
          <div className="flex justify-center items-center gap-10">
            <p className="leading-8">
              Etiam malesuada sit amet quam ac imperdiet. Nullam auctor odio
              augue, in finibus risus luctus ac. Curabitur eu nulla urna. Nunc
              sit amet libero nibh.
            </p>
            <p className="leading-8">
              Quisque vitae urna eget orci fermentum condimentum in quis neque.
              Donec tortor elit, auctor a massa non, fringilla auctor lorem.
              Cras mauris ex, finibus conse.
            </p>
          </div>
          <div className="flex items-center gap-5 mt-8">
            <img className="w-14 rounded-full" src={image02} alt="" />
            <div>
              <h3>Rabbi Mia</h3>
              <h5>Hotel Manager</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-28">
        <div className="img-04 h-[450px] flex items-center justify-center">
          {/* background image from css */}
        </div>
        <div className="bg-01 h-[450px] flex items-center justify-center">
          <div>
            <div className="flex items-center justify-center gap-5">
              <div className="bg-white w-14 h-1"></div>
              <p className="text-white">QUEEN ROOM</p>
              <div className="bg-white w-14 h-1"></div>
            </div>
            <p className="text-white text-2xl font-semibold text-center mt-5">
              Suite with 2 Bedrooms,
              <br />
              Bathtub & Spa
            </p>
            <p className="text-white text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
              phasellus.
            </p>
            <div className="flex items-center justify-center mt-10">
              <button className="border px-6 py-2 text-white text-2xl font-semibold">
                $45,20
              </button>
            </div>
          </div>
        </div>
        <div className="img-03 h-[450px] flex items-center justify-center">
          {/* image from css file */}
        </div>
        <div className="bg-01 h-[450px] flex items-center justify-center">
          <div>
            <div className="flex items-center justify-center gap-5">
              <div className="bg-white w-14 h-1"></div>
              <p className="text-white">KING ROOM</p>
              <div className="bg-white w-14 h-1"></div>
            </div>
            <p className="text-white text-2xl font-semibold text-center mt-5">
              Luxurious Apartment <br /> With Room Service
            </p>
            <p className="text-white text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
              phasellus.
            </p>
            <div className="flex items-center justify-center mt-10">
              <button className="border px-6 py-2 text-white text-2xl font-semibold">
                $45,20
              </button>
            </div>
          </div>
        </div>
        <div className="bg-01 h-[450px] flex items-center justify-center">
          <div>
            <div className="flex items-center justify-center gap-5">
              <div className="bg-white w-14 h-1"></div>
              <p className="text-white">KING ROOM</p>
              <div className="bg-white w-14 h-1"></div>
            </div>
            <p className="text-white text-2xl font-semibold text-center mt-5">
              Room with City View <br /> & Private Bathroom
            </p>
            <p className="text-white text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
              phasellus.
            </p>
            <div className="flex items-center justify-center mt-10">
              <button className="border px-6 py-2 text-white text-2xl font-semibold">
                $45,20
              </button>
            </div>
          </div>
        </div>
        <div className="img-02 h-[450px] flex items-center justify-center">
          {/* image from css file */}
        </div>
        <div className="bg-02 h-[450px] flex items-center justify-center">
          <div>
            <div className="flex items-center justify-center gap-5">
              <div className="bg-white w-14 h-1"></div>
              <p className="text-white">SMALL SUITE</p>
              <div className="bg-white w-14 h-1"></div>
            </div>
            <p className="text-white text-2xl font-semibold text-center mt-5">
              Summer Promotion With <br /> Access to t he Pool
            </p>
            <p className="text-white text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
              phasellus.
            </p>
            <div className="flex items-center justify-center mt-10">
              <button className="border px-6 py-2 text-white text-2xl font-semibold">
                $45,20
              </button>
            </div>
          </div>
        </div>
        <div className="img-01 h-[450px] flex items-center justify-center">
          {/* image from css file */}
        </div>
      </div>

      <div className="max-w-screen-xl m-auto mt-24 mb-20">
        <h5 className="text-[#BF9B79] uppercase">Accommodations</h5>
        <h1 className="text-5xl mt-5">First Choice Inn</h1>

        <div className="grid grid-cols-4 gap-5">
          <div>
            <h1 className="text-8xl text-[#BF9B79] mb-5">1</h1>
            <h3 className="text-xl font-semibold mb-4">Single Rooms</h3>
            <p>
              Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit.
              Proin tempor nunc vel nisl condim.
            </p>
            <div className="mt-5">
              <p className="flex items-center gap-4">
                <FaHandPointRight /> In sit amet augue non dui
              </p>
              <p className="flex items-center gap-4">
                <FaHandPointRight />
                Proin quis elit lacinia arcu
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-8xl text-[#BF9B79] mb-5">2</h1>
            <h3 className="text-xl font-semibold mb-4">Single Rooms</h3>
            <p>
              Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit.
              Proin tempor nunc vel nisl condim.
            </p>
            <div className="mt-5">
              <p className="flex items-center gap-4">
                <FaHandPointRight /> In sit amet augue non dui
              </p>
              <p className="flex items-center gap-4">
                <FaHandPointRight />
                Proin quis elit lacinia arcu
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-8xl text-[#BF9B79] mb-5">3</h1>
            <h3 className="text-xl font-semibold mb-4">Single Rooms</h3>
            <p>
              Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit.
              Proin tempor nunc vel nisl condim.
            </p>
            <div className="mt-5">
              <p className="flex items-center gap-4">
                <FaHandPointRight /> In sit amet augue non dui
              </p>
              <p className="flex items-center gap-4">
                <FaHandPointRight />
                Proin quis elit lacinia arcu
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-8xl text-[#BF9B79] mb-5">4</h1>
            <h3 className="text-xl font-semibold mb-4">Single Rooms</h3>
            <p>
              Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit.
              Proin tempor nunc vel nisl condim.
            </p>
            <div className="mt-5">
              <p className="flex items-center gap-4">
                <FaHandPointRight /> In sit amet augue non dui
              </p>
              <p className="flex items-center gap-4">
                <FaHandPointRight />
                Proin quis elit lacinia arcu
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutPage-MidBanner flex justify-center items-center">
        <div>
          <h1 className="uppercase text-4xl text-white leading-[55px]">
            The Satisfaction of our <br /> Customer is our Goal
          </h1>
          <p className="text-white mt-5 leading-7">
            Mauris vel quam vel felis maximus bibendum vel quis erat. Duis{" "}
            <br />
            accumsan posuere est quis egestas. Donec nec odio non tellus <br />{" "}
            convallis mattis a nec purus. Duis quis tortor elit.
          </p>
          <div className="flex justify-center mt-5">
            <button className="bg-[#BF9B79] text-white uppercase px-8 py-2">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
