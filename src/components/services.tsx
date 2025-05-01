import { Feature } from "@/lib/types";
import ServiceCard from "./service-card";
import Wrapper from "./wrapper";

const features: Feature[] = [
  {
    id: 1,
    title: "Live online classes available 24/7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/service-1.png",
  },
  {
    id: 2,
    title: "Practise with online activities and materials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/service-2.png",
  },
  {
    id: 3,
    title: "Enhance your learning experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/service-3.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-dark py-20">
      <Wrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <ServiceCard index={index} key={item.id} service={item} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
