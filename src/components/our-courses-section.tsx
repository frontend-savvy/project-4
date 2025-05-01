import { Course } from "@/lib/types";
import Link from "next/link";
import CourseItem from "./course-item";
import H2 from "./h2";
import P from "./p";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

const courses: Course[] = [
  {
    id: 1,
    title: "English for Beginners",
    price: 25,
    priceNote: "Price per lesson",
    description: "Our best English course for starter level.",
    image: "/course-1.jpg",
  },
  {
    id: 2,
    title: "Online Learning",
    price: 25,
    priceNote: "Price per lesson",
    description: "Sample text. Click to select the Text Element.",
    image: "/course-2.jpg",
  },
  {
    id: 3,
    title: "English for Business",
    price: 45,
    priceNote: "Price per lesson",
    description: "Sample text. Click to select the Text Element.",
    image: "/course-3.jpg",
  },
  {
    id: 4,
    title: "English for Kids",
    price: 17,
    priceNote: "Price per lesson",
    description: "Sample text. Click to select the Text Element.",
    image: "/course-4.jpg",
  },
];

export default function OurCoursesSection() {
  return (
    <section className="pb-10">
      <div className="h-fit  pt-20 pb-30 bg-secondary text-center text-white">
        <H2>Our Courses</H2>
        <P className="mt-5 wrapper">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Images
          from{" "}
          <Link className="underline underline-offset-4" href={""}>
            Freepik
          </Link>
        </P>
      </div>
      <Wrapper className="flex flex-col items-center gap-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 -mt-20">
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>

        <Button className="">View All</Button>
      </Wrapper>
    </section>
  );
}
