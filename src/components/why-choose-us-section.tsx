import { Benefit, Statistic } from "@/lib/types";
import BenefitItem from "./benefit-item";
import StatItem from "./stat-item";
import { Button } from "./ui/button";

const statistics: Statistic[] = [
  {
    id: 1,
    value: "30k+",
    label: "Students",
  },
  {
    id: 2,
    value: "74",
    label: "Teachers",
  },
  {
    id: 3,
    value: "50+",
    label: "Courses",
  },
];
const whyChooseUsBenefits: Benefit[] = [
  { id: 1, text: "Improve Your Career & Business" },
  { id: 2, text: "Build Deeper Connections With More People" },
  { id: 3, text: "Sharpen Your Decision-Making" },
  { id: 4, text: "Feed Your Brain" },
  { id: 5, text: "Treasure Other Cultures" },
  { id: 6, text: "See the World (More Fully)" },
];

export default function WhyChooseUsSection() {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <div className=" px-[4rem] bg-primary basis-1/2 py-10 md:py-20   text-white md:pr-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-noto-sans font-bold">
            Certified Translation
          </h3>
          <p className="md:text-lg mt-5 leading-[2]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <hr className="bg-white h-1 w-full mt-10" />
          <div className="flex flex-wrap justify-between gap-8 mt-10">
            {statistics.map((stat) => (
              <StatItem key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
        <div className=" px-[4rem] bg-secondary basis-1/2 text-white py-10 md:py-20 md:pl-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-noto-sans font-bold">
            Why Choose Us
          </h3>
          <p className="md:text-lg mt-5 leading-[2]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <ul className="mt-5">
            {whyChooseUsBenefits.map((item) => (
              <BenefitItem key={item.id} benefit={item.text} />
            ))}
          </ul>
          <Button className="border-white mt-5 hover:bg-white hover:text-secondary">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
