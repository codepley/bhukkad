import Buttons from "./Buttons";

const Download = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(37, 43, 66, 0.40) 0%, rgba(37, 43, 66, 0.40) 100%), url(/download.jpg), lightgray 50% / cover no-repeat",
            objectFit: 'fill',
            objectPosition: 'bottom',
            backgroundRepeat: 'no-repeat'
        }}
        className="w-full lg:w-[1440px] h-[620px] text-white flex flex-col justify-center items-center gap-16 font-monst"
      >
        <div className="w-[80%] lg:w-full flex flex-col justify-center items-center gap-5">
          <div className="text-3xl lg:text-5xl text-center font-bold">Download the app now.</div>
          <div className="text-lg lg:text-2xl text-center">
            Available on your favorite store. Start your premium experience now
          </div>
        <Buttons />
        </div>
      </div>
    </div>
  );
};
export default Download;
