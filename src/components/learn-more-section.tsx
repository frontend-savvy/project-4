import Link from "next/link";
import H3 from "./h3";
import ImageBlock from "./image-block";
import P from "./p";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function LearnMoreSection() {
  return (
    <section className="py-10">
      <Wrapper>
        <div className="flex flex-col gap-6 lg:flex-row items-end ">
          <ImageBlock src="/carousel-2.jpg" />
          <div className="grid gap-6 sm:grid-cols-2  ">
            <div className="py-8 sm:col-span-full">
              <H3 className="">Learn more, get results</H3>
              <P>
                Sample text. Click to select the text box. Click again or double
                click to start editing the text. Iages from{" "}
                <Link className="underline underline-offset-4" href={""}>
                  Freepik
                </Link>
              </P>
              <Button className="uppercase mt-5">learn more</Button>
            </div>

            <ImageBlock src="/carousel-3.jpg" />
            <ImageBlock src="/person.jpg" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
