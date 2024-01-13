const Screen = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full lg:w-[1440px] flex lg:flex-row-reverse flex-col-reverse justify-center items-center pb-20 lg:gap-44">
        <div className="lg:-mt-24">
          <img
            className="h-[525px] w-[302px] object-cover drop-shadow-2xl"
            src="/screen2.png"
            alt=""
          />
        </div>
        <div className="w-[80%] lg:w-[568px] lg:mt-24 lg:pl-10 flex flex-col items-center lg:items-start justify-center font-monst gap-2">
          <p className="text-[#FA4A0C] lg:text-2xl font-bold tracking-wide">
            Create an Screen2
          </p>
          <div className="text-lg lg:text-4xl text-center lg:text-left font-bold flex flex-col py-2 lg:gap-2">
            <p>Create/login to an existing</p>
            <p>account to get started</p>
          </div>
          <div className="lg:text-2xl text-center lg:text-left flex flex-col text-[#737373] py-2 lg:gap-2">
            <p>An account is created with your email</p>
            <p>and a desired password</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Screen;
