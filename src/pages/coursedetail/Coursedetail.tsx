import think from "../../assets/Thinking.png";
import write from "../../assets/Writing.png";
import typing from "../../assets/typing.png";
import listen from "../../assets/Listening.png";
import CardBox from "./components/CardBox";


const Coursedetail = () => {
  const feature = [
    {
      id: 1,
      heading: "Start with Clarity",
      summary: "Step into a better learning path",
      detail:
        "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
      icon: think ,
      bg:"bg-red-400"
    },
    {
      id: 2,
      heading: "Learn by Doing",
      summary: "Practical skills, real projects.",
      detail:
        "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
      icon: write ,
      bg:"bg-blue-400"
    },
    {
      id: 3,
      heading: "Get Mentored & Supported",
      summary: "You're not learning alone.",
      detail:
        "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own",
      icon: typing ,
      bg:"bg-amber-500"
    },
    {
      id: 4,
      heading: "Achieve & Showcase",
      summary: "Build your portfolio, get job-ready.",
      detail:
        "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
      icon: listen ,
      bg:"bg-purple-600"
    },
  ];

  return (
    <div>
      {/*Top Heading  */}
      <div className="flex flex-col gap-y-3">
        <p className="text-black font-light ">Your SkillShikshya Journey</p>
        <h1 className="text-2xl font-neutral-800 font-semibold">
          <span className="text-cyan-500">Step </span>In.{" "}
          <span className="text-cyan-500">Skill</span> Up.{" "}
          <span className="text-cyan-500">Stand</span> Out
        </h1>
      </div>
      {/* Card Component */}
      <div>
            <CardBox value={feature}/>
      </div>
    </div>
  );
};

export default Coursedetail;
