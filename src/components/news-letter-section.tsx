import { ContactButton } from "./contact-form";
import H3 from "./h3";
import P from "./p";
import { Input } from "./ui/input";
import Wrapper from "./wrapper";

export default function NewsLetterSection() {
  return (
    <section className="bg-dark text-white pb-10">
      <Wrapper>
        <div className="flex flex-col gap-24 md:flex-row md:justify-between md:items-center">
          <div>
            <H3>Subscribe to Newsletter</H3>
            <P className="">Stay updated with our latest news and offers</P>
          </div>
          <form
            action=""
            className="flex flex-col gap-4 items-center md:flex-row basis-1/2"
          >
            <Input
              className="placeholder:text-white/75"
              type="email"
              placeholder="Enter a valid email address"
            />
            <ContactButton className="w-full  md:w-fit">
              send message
            </ContactButton>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}
