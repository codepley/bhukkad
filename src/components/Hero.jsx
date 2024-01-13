import Buttons from "./Buttons";

const Hero = () => {
  return (
    <div style={{
      background: `linear-gradient(0deg, rgba(23, 16, 16, 0.60) 0%, rgba(23, 16, 16, 0.60) 100%), url('/heroBg.jpeg'), lightgray 50% / cover no-repeat`,
      backgroundSize: "cover",
    }} className="w-full flex justify-center items-center">
      <div className="lg:w-[1440px] w-full h-[620px] text-white flex flex-col justify-center items-center gap-10"
      >
        <div className="lg:w-[1004px] w-full font-poppins flex flex-col justify-center gap-6 items-center">
          <div className="font-extrabold flex flex-col lg:gap-2 text-4xl lg:text-6xl text-center">
            <p className="tracking-wide">Why stay hungry when </p>
            <p className="tracking-wide">you can order from <span className="text-[#FA4A0C] font-pacifico">Bhukkad</span></p>
          </div>
          <p className="tracking-widest text-center">Download the Bhukkad app now on</p>
        </div>
        <Buttons />
      </div>
    </div>
  );
};
export default Hero;
