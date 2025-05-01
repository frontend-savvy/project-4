import ContactDetails from "./contact-details";
import ContactFormDetails from "./contact-form-details";
import Wrapper from "./wrapper";
export default function ContactSection() {
  return (
    <section className="py-20 bg-dark">
      <Wrapper>
        <div className="flex flex-col border   md:flex-row bg-white md:py-10 rounded-md ">
          <ContactDetails />
          <ContactFormDetails />
        </div>
      </Wrapper>
    </section>
  );
}
