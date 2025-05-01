import { Offering } from "@/lib/types";
import H2 from "./h2";
import ImageCredit from "./image-credit";
import OfferingCard from "./offering-card";
import P from "./p";
import Wrapper from "./wrapper";

export const offerings: Offering[] = [
  {
    id: 1,
    image: "/offering-1.jpg",
    title: "Flexible English Courses",
    description: "Ut enim ad minim veniam",
  },
  {
    id: 2,
    image: "/offering-2.jpg",
    title: "Live Speaking Practice",
    description: "Consectetur adipiscing elit",
  },
  {
    id: 3,
    image: "/offering-3.jpg",
    title: "Certified Tutors",
    description: "Sed do eiusmod tempor",
  },
];

export default function OfferingSection() {
  return (
    <section className="bg-dark pb-15">
      <Wrapper>
        <div className="text-white text-center py-15">
          <H2>What We Offer</H2>
          <P className="mt-5">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip
          </P>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item) => (
            <OfferingCard key={item.id} item={item} />
          ))}
        </div>
        <ImageCredit className="text-white text-center mt-8" />
      </Wrapper>
    </section>
  );
}
