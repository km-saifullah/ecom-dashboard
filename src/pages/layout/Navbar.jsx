import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward, IoMdNotificationsOutline } from "react-icons/io";
import Image from "../../components/Image";
import avatar from "/randoProfileImg.jpeg";
import { useState } from "react";

const Navbar = ({ setIsOpen, isOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // profile dropdown
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const toogleDropdown = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  return (
    <nav className="py-4 flex items-center justify-between">
      <section className="flex items-center gap-x-7">
        <div onClick={toggleSidebar}>
          <HiOutlineBars3CenterLeft className="w-[35px] h-[35px] text-primary cursor-pointer" />
        </div>
        <div className="flex items-center justify-between w-[300px] h-[52px]">
          <input type="text" className="" placeholder="Search.." />
          <IoSearchOutline className="w-[35px] h-[35px] text-text cursor-pointer" />
        </div>
      </section>
      <section className="flex items-center gap-x-3">
        <div className="cursor-pointer">
          <IoSettingsOutline className="text-primary text-2xl" />
        </div>
        <div className="cursor-pointer">
          <IoMdNotificationsOutline className="text-primary text-2xl" />
        </div>

        {/*  userProfile start */}
        <div className="flex items-center gap-3" onClick={toogleDropdown}>
          <div>
            <img
              className="cursor-pointer h-[40px] w-[40px] rounded-full "
              src="/randoProfileImg.jpeg"  //this image source will come from backend. 
              alt="user profile image"
            />
          </div>
          <div className="relative inline-block">
            <button className="text-sm font-medium text-base hover:text-gray-900">
              John Doe
            </button> {/* the name will come from backend. test dummy. */}

            {isOpenProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
                <ul>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#">See Profile</a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
