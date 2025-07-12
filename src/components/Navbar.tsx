
import { Link } from "react-router-dom";

const Navbar = () => {
  const navitems = [
    { id: 1, name: "Courses", link: "/" },
    { id: 2, name: "CourseDetail", link: "/Coursedetail" },
  ];

  return (
    <div className="flex px-28 flex-row items-center justify-between w-full h-[7ch] bg-neutral-700 ">
      <h1 className="flex h-full items-center text-xl font-serif gap-x-1 font-semibold text-neutral-300 text-shadow-md">
        Frontend
        <span className="text-cyan-600">Assessment</span>
      </h1>
      <div className="flex items-center justify-center h-full gap-x-3">
        <ul className="flex items-center justify-center gap-x-3">
          {navitems.map((items) => (
            <li
              key={items.id}
              className="text-neutral-300 p-2 bg-neutral-600 rounded-2xl shadow-md  text-lg font-mono hover:text-cyan-500 transition-all ease-in-out duration-300"
            >
              <Link to={items.link}>{items.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
