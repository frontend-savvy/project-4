import { CarouselDemo } from "./carousel-demo";
import H3 from "./h3";
import ImageCredit from "./image-credit";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function EnglishPromoSection() {
  return (
    <section className="py-20">
      <Wrapper>
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="w-full py-8">
            <H3>Get the most out of life by improving your English skills</H3>
            <p className="leading-[2] mt-8 md:text-lg">
              Nibh venenatis cras sed felis eget velit aliquet sagittis id.
              Tellus pellentesque eu tincidunt tortor aliquam nulla.
            </p>
            <ImageCredit className="mt-8" />
            <Button className="uppercase mt-10 tracking-[2px]">
              Learn more
            </Button>
          </div>
          <div className="w-full ">
            <CarouselDemo />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
