import { course } from "@/constants";
import Image from "next/image";

const Instructor = () => {
  return (
    <section className="px-28 mb-20 text-lg">
      <p className="text-2xl font-bold mb-6">About the instructor</p>
      <div className="flex flex-row">
        <Image
          alt="reviewer"
          src="/profile.jpg"
          height={150}
          width={150}
          className="rounded-full"
        />
        <p className="mx-6">{course.about_instructor}</p>
      </div>
      <div className="flex flex-row justify-between mx-44">
        {course.instructor.social_media.facebook && (
          <button className="flex flex-row">
            <Image
              alt="facebook"
              className="mr-2"
              src="/facebook.svg"
              height={20}
              width={20}
            />
            <span>Facebook</span>
          </button>
        )}
        {course.instructor.social_media.twitter && (
          <button className="flex flex-row">
            <Image
              alt="twitter"
              className="mr-2"
              src="/twitter.svg"
              height={20}
              width={20}
            />
            <span>Twitter</span>
          </button>
        )}
        {course.instructor.social_media.youtube && (
          <button className="flex flex-row">
            <Image
              alt="youtube"
              className="mr-2"
              src="/youtube.svg"
              height={20}
              width={20}
            />
            <span>Youtube</span>
          </button>
        )}
        {course.instructor.social_media.instagram && (
          <button className="flex flex-row">
            <Image
              alt="instagram"
              className="mr-2"
              src="/instagram.svg"
              height={20}
              width={20}
            />
            <span>Instagram</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default Instructor;
