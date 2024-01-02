import Image from "next/image";
import { course } from "@/constants";

const Testimonial = () => {
  return (
    <section className="px-80 py-12 bg-gray-200 flex flex-col">
      <div className="text-black font-bold text-center text-2xl">
        {course.testimonial.text}
      </div>
      <div className="flex flex-row justify-center mt-6">
        <Image
          alt="reviewer"
          src="/reviewer.jpg"
          height={48}
          width={48}
          className="rounded-full border border-black mr-2"
        />
        <div>
          <p className="font-semibold">{course.testimonial.reviewer_name}</p>
          <p>{course.testimonial.reviewer_designation}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
