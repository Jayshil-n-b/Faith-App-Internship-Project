import Image from "next/image";
import { course } from "@/constants";

const Hero = () => {
  return (
    <section className="flex flex-row justify-between px-24 h-96 relative overflow-hidden">
      <img className="-z-20 absolute inset-0 w-full" src="/hero.jpg" alt="" />
      <div class="-z-10 absolute inset-0 bg-gradient-to-l from-transparent to-neutral-700"></div>
      <div className="flex flex-col justify-end pb-8 w-1/2 font-bold text-white">
        <p className="mb-2 text-2xl">{course.instructor.name}</p>
        <p className="text-3xl">{course.course.title}</p>
      </div>
    </section>
  );
};

export default Hero;
