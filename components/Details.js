import { course } from "@/constants";
import Image from "next/image";

const Details = () => {
  return (
    <section className="flex flex-row z justify-between px-28 mb-20 text-lg">
      <div className="flex flex-col w-1/2">
        <div className="flex flex-row justify-between text-lg mt-4 mb-8">
          <button className="px-10 border-b-4 border-purple-600 pb-2">
            ABOUT
          </button>
          <button className="px-10">INSTRUCTOR</button>
          <button className="px-10">REVIEWS</button>
        </div>
        <div>
          <p className="font-bold text-2xl mb-4">About the course</p>
          {course.course.about.map((a, e) => (
            <>
              <p key={e}>{a}</p>
              <br />
            </>
          ))}
        </div>
        <div>
          <p className="font-bold text-2xl mb-4">
            What to expect from the course
          </p>
          {course.course.what_to_expect.map((a, e) => (
            <div key={e} className="flex flex-row">
              <Image
                alt="tick"
                src="/tick.png"
                height={24}
                width={24}
                className="mr-6"
              />
              <span>{a}</span>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <p className="font-bold text-2xl mb-4">Key topics covered</p>
          <p className="mb-4">{course.course.key_topics_para}</p>
          {course.course.key_topics.map((a, e) => (
            <div key={e} className="flex flex-row">
              <Image
                alt="tick"
                src="/tick.png"
                height={24}
                width={24}
                className="mr-6 h-full"
              />
              <span>{a}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-purple-50 p-5 h-full mt-[-42px]">
        <p className="font-bold">
          <span>Course fees</span>
        </p>
        <p className="font-bold mb-4 text-4xl">
          &#x20B9;{course.course.fee.amount}
        </p>
        <p className="font-bold mb-2">What&apos;s included:</p>
        <p className="flex flex-row">
          <Image
            alt="TV"
            src="/tv.png"
            height={24}
            width={24}
            className="mr-2"
          />
          <span>
            {course.course.inclusions.on_demand_videos} on-demand videos
          </span>
        </p>
        <p className="flex flex-row">
          <Image
            alt="TV"
            src="/tv.png"
            height={24}
            width={24}
            className="mr-2"
          />
          <span>
            {course.course.inclusions.live_stream_sessions} livestream sessions
          </span>
        </p>
        {course.course.inclusions.live_qa_sessions && (
          <p className="flex flex-row">
            <Image
              alt="Chat"
              src="/chat.png"
              height={24}
              width={24}
              className="mr-2"
            />
            <span>Live Q&A sessions with {course.instructor.name}</span>
          </p>
        )}
        {course.course.inclusions.whatsapp_community && (
          <p className="flex flex-row">
            <Image
              alt="Chat"
              src="/chat.png"
              height={24}
              width={24}
              className="mr-2"
            />
            <span>An active Whatsapp community</span>
          </p>
        )}
        <button className="bg-purple-800 text-white w-full py-2 mt-8 rounded-3xl text-xl">
          Register Today
        </button>
      </div>
    </section>
  );
};

export default Details;
