import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function HeroSection() {
  return (
    <section className="pt-10">
      <Wrapper>
        <div className="flex flex-col gap-6 md:flex-row items-center">
          <div className="w-full flex flex-col  items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-open-sans font-bold">
              Language Courses{" "}
              <span className="block md:inline">and Programs</span>
            </h2>
            <p className="mt-8 md:text-xl">
              Join our international family today! Please call us for more info.
              Image from{" "}
              <Link className="underline underline-offset-5" href={""}>
                Freepik
              </Link>
            </p>
            <Button className="mt-8  ">
              <BsTelephoneFill className="text-green-500 text-7xl" />
              <span>+123 321 7890</span>
            </Button>
          </div>
          <div className="relative aspect-square w-full">
            <Image
              className="h-full w-full object-contain"
              src="/hero.png"
              fill
              alt=""
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
