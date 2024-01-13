const Buttons = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <button className="w-52 py-4 rounded-[30px] border-white hover:border-[#fa4a0c] border-[1px] hover:bg-[#FA4A0C] font-bold tracking-widest">
        Playstore
      </button>
      <button className="w-52 py-4 rounded-[30px] border-white hover:border-[#fa4a0c] border-[1px] hover:bg-[#FA4A0C] font-bold tracking-widest">
        Appstore
      </button>
    </div>
  );
};
export default Buttons;
