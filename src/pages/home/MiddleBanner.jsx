import "./BackgroundImage.css";

const MiddleBanner = () => {
  return (
    <div className="middle-banner mt-24 py-28">
      <div className="max-w-screen-lg m-auto flex justify-center">
        <div className="bg-01 w-[600px] py-12">
          <h3 className="uppercase text-center text-5xl text-white font-semibold mb-10">
            Sanification
          </h3>
          <h1 className="text-center text-white text-8xl mb-5">
            20 <span className="text-5xl">%</span>
          </h1>
          <p className="uppercase text-center text-xl text-white">winter best promo price</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
