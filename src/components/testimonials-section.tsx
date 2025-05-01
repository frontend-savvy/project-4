import H2 from "./h2";
import { TestimonialCarousel } from "./testimonial-carousel";
import Wrapper from "./wrapper";

export default function TestimonialsSection() {
  return (
    <section className="pt-18 pb-30 bg-primary text-center text-white">
      <Wrapper>
        <H2 className="mb-10">What our learners say</H2>
        <TestimonialCarousel />
      </Wrapper>
    </section>
  );
}
