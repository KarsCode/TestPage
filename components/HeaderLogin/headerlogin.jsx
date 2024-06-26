import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex font-bold items-start pb-4 pl-2 pr-6 pt-4 sm:pt-0 sm:pr-5 sm:pl-[6rem]">
      <a href="/" className="">
        <img src="/logo.png" width="150" height="50" alt="Logo" />
      </a>

      <div className="flex items-left pr-2 ml-auto">
        {/* Bootstrap dropdown for small screens */}
        <div className="dropdown lg:hidden pt-[10px]">
          <button className="btn btn-secondary dropdown-toggle flex justify-center bg-black " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item text-sm" href="#">Why myPartner?</a>
            <a className="dropdown-item text-sm" href="#">Product Highlights</a>
          </div>
        </div>

        {/* Display options for larger screens */}
        <div className="hidden lg:flex gap-4 items-center">
          <div>Why myPartner?</div>
          <div>Product Highlights</div>
        </div>

        <div className="pl-2 flex gap-2 items-center">
          <div className="w-8 h-8 flex justify-center items-center bg-[#06539A] text-white rounded-full">
            <FaUser size={15} />
          </div>
          <div>Log In</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

