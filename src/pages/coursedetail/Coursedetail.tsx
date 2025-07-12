import think from "../../assets/Thinking.png";
import write from "../../assets/Writing.png";
import typing from "../../assets/typing.png";
import listen from "../../assets/Listening.png";
import CardBox from "./components/CardBox";
import backgroundVideo from "../../assets/Screen Recording 2025-07-08 at 15.16.08.mov";

const Coursedetail = () => {
  const feature = [
    {
      id: 1,
      heading: "Start with Clarity",
      summary: "Step into a better learning path",
      detail:
        "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
      icon: think,
      bg: "bg-red-400",
      position: "left-[-11rem] top-[-5rem]",
      flex: "items-end",
    },
    {
      id: 2,
      heading: "Learn by Doing",
      summary: "Practical skills, real projects.",
      detail:
        "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
      icon: write,
      bg: "bg-sky-500",
      position: "right-[-11rem] top-[-4rem]",
      flex: "items-start",
    },
    {
      id: 3,
      heading: "Get Mentored & Supported",
      summary: "You're not learning alone.",
      detail:
        "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own",
      icon: listen,
      bg: "bg-purple-700",
      position: "left-[-10rem] top-[-2rem]",
      flex: "items-end",
    },
    {
      id: 4,
      heading: "Achieve & Showcase",
      summary: "Build your portfolio, get job-ready.",
      detail:
        "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
      icon: typing,
      bg: "bg-amber-600",
      position: "right-[-11rem] top-[-4rem]",
      flex: "items-start",
    },
  ];

  return (
    <div className="px-28 relative flex flex-col ">
      {/* Adding video animation */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/*Top Heading  */}
      <div className="flex flex-col items-center gap-y-3 py-10 w-full  ">
        <p className="text-black font-medium ">Your SkillShikshya Journey</p>
        <h1 className="text-2xl font-neutral-800 font-semibold">
          <span className="text-cyan-300">Step </span>In.{" "}
          <span className="text-cyan-300">Skill</span> Up.{" "}
          <span className="text-cyan-300">Stand</span> Out
        </h1>
      </div>
      {/* Card Component */}
      <div>
        <CardBox value={feature} />
      </div>
    </div>
  );
};

export default Coursedetail;
