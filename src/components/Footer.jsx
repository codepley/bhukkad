import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full lg:w-[1210px] h-[133px] flex flex-col lg:flex-row items-center justify-center lg:justify-between py-9">
        <div>
          <img className="w-60 object-cover" src="/logo.png" alt="" />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center lg:pr-4">
          <div className="flex flex-row justify-center items-center gap-8 text-[#FA4A0C]">
            <FaTwitter className="h-9 w-9" />
            <FaFacebook className="h-9 w-9" />
            <FaInstagram className="h-9 w-9" />
          </div>
          <div>
            <p className="font-bold tracking-widest font-roboto">
              Copyright &copy; <span>Bhukkad</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
