
import { Flame } from "lucide-react";
import Coursecard from "./components/Coursecard";

const Coures = () => {
  const icons = [
    {
      id: 1,
      url: "https://play-lh.googleusercontent.com/n81qI0bLw8BrIwrh3UNQtzZZ6p7BnNZeCoImMHgNy-ZUtF1O4Ffdllc7majTe6tpgA=w240-h480-rw",
      titlename: "react icon",
    },
    {
      id: 2,
      url: "https://qik.digital/img/service/logo/1.png",
      titlename: "Chat Box",
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-ilZjliZ8YBnBrHkuPD6Cg91iNvzmSsDUQ&s",
      titlename: "Vue js",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/61/ab/dc/61abdc0caf752e3ff7671975bf13e034.jpg",
      titlename: "pen",
    },
  ];

  return (
    <div className="flex flex-col gap-y-2 px-12 py-10">
      {/* top heading */}
      <div className="flex flex-col gap-y-2 items-start justify-center">
        <p className="text-base font-light ">
          Explore our classes and master trending skills!
        </p>
        <h1 className="text-2xl flex gap-x-2  font-semibold text-neutral-800 ">
          Dive Into
          <span className="text-cyan-300 flex items-center  ">
            What's Hot Right Now! <Flame className="text-yellow-200" />
          </span>
        </h1>
      </div>

      <div>
        <Coursecard value={icons}/>
      </div>

      {/* Button icons section */}
    </div>
  );
};

export default Coures;
