const AppPreview = () => {
  return <div className="w-full flex justify-center items-center pb-16">
   <div className="w-full lg:w-[1440px] flex flex-col gap-16 justify-center items-center">
      <div className="relative w-[700px] flex justify-center items-center">
         <img className="z-[1] absolute w-[299px] h-[586px] top-[-160px] right-[300px] flex-shrink-0 object-cover drop-shadow-2xl" src="/left.png" alt="" />
         <img className="absolute w-[299px] top-[-100px] right-[80px] h-[586px] flex-shrink-0 object-cover drop-shadow-2xl" src="right.png" alt="" />
      </div>
      <div className="h-[3px] w-full lg:w-[884px] bg-[#E4E4E4] hidden lg:flex lg:mt-[500px]"></div>
      <div className="text-4xl font-bold text-center tracking-wider lg:mt-0 mt-[500px]">How the app works</div>
      <div className="lg:hidden h-[3px] w-full lg:w-[884px] bg-[#E4E4E4]"></div>
   </div>
  </div>;
};
export default AppPreview;
