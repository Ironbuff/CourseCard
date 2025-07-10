
import Coursecard from "./components/Coursecard";
import Coursetitle from "./components/Coursetitle";
import fire from "../../../public/flame.png"

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

  const Coursedes = [
    {
      id: 1,
      Count: "05",
      title: "Upcoming Courses",
      desc: "exciting new courses waiting boost your skills",
    },
    {
      id: 2,
      Count: "10",
      title: "Ongoing Courses",
      desc: "currently happening- don't miss out on the action!",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto gap-y-5 px-12 py-10">
      {/* top heading */}
      <div className="flex flex-col gap-y-2 items-start justify-center w-[60%] ">
        <p className="text-base font-light ">
          Explore our classes and master trending skills!
        </p>
        <h1 className="text-2xl flex gap-x-2  font-semibold text-neutral-800 ">
          Dive Into
          <span className="text-green-400 flex gap-x-2 items-center  ">
            What's Hot Right Now! <img src={fire} className="w-8 h-8"/>
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col items-center justify-center gap-y-8 py-22 bg-red-500 px-4 max-w-[30rem] h-[22rem] my-auto rounded-2xl text-neutral-100 ">
          <Coursecard value={icons} />
          <div className="flex flex-row gap-x-3">
            <div className="flex flex-row gap-x-5 items-center justify-center">
              <h2 className="text-8xl  relative font-bold">
                23
                <span className="absolute top-0  text-2xl ">+</span>
              </h2>
              <div>
                <h3 className="text-xl font-semibold">All Courses</h3>
                <p className="text-sm font-light w-[80%]">
                  courses you're powering through right now
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* course Description Component*/}
        <div className="flex flex-row gap-x-3">
          <Coursetitle value={Coursedes} />
        </div>
      </div>
    </div>
  );
};

export default Coures;
