import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center shadow-lg">
      <div className="w-full lg:w-[1440px] h-[80px] flex items-center justify-between pr-4 lg:px-16">
        <div>
          <div>
            <img className="w-40 object-cover" src="/logo.png" alt="" />
            {/* <p>Hello</p> */}
          </div>
        </div>
        <div className="lg:hidden"><IoMenu className="text-4xl" /></div>
        <div className="hidden lg:flex flex-row gap-24">
          <p>Home</p>
          <p>Product</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
