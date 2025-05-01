import { Course } from "@/lib/types";
import Image from "next/image";
import P from "./p";

export default function CourseItem({ course }: { course: Course }) {
  return (
    <div className="">
      <div className="relative card overflow-hidden rounded-md">
        {/* Background image */}
        <Image
          className="object-cover z-0"
          fill
          src={course.image}
          alt="Course image"
        />

        {/* Overlay to darken image (optional) */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Text content */}
        <div className="relative z-20 p-4 text-white">
          <h5 className="text-xl font-semibold">{course.title}</h5>
          <h4 className="text-3xl font-bold mt-12">${course.price}</h4>
          <p className="text-sm mt-3">{course.priceNote}</p>
        </div>
      </div>
      <P className="text-center mt-2">{course.description}</P>
    </div>
  );
}
