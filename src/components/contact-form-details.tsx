import ContactForm from "./contact-form";
import H3 from "./h3";
import P from "./p";

export default function ContactFormDetails() {
  return (
    <div className="p-8  basis-1/2">
      <div className="text-center">
        <H3>Have any question?</H3>
        <P className="text-center my-5">
          our email address will not be published. Required field are marked*
        </P>
        <ContactForm />
      </div>
    </div>
  );
}
