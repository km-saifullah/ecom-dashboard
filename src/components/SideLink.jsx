import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const SideLink = ({ icon: Icon, path, title }) => {
  return (
    <section className="flex items-center justify-between mt-6">
      <section className="">
        <div>
          <Icon className="text-text group-hover:text-white text-2xl" />
        </div>
        <h3 className="">
          <Link to={path}>{title}</Link>
        </h3>
      </section>
      <section>
        <IoIosArrowForward className="" />
      </section>
    </section>
  );
};

export default SideLink;
