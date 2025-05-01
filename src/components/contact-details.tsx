import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Link from "next/link";
import ContactItem from "./contact-item";

export default function ContactDetails() {
  return (
    <div className="basis-1/2">
      <ContactItem icon={FaPhone} title="Call Us">
        <Link href="">+123 456 7890</Link>
        <Link href="">+123 456 7890</Link>
      </ContactItem>

      <ContactItem icon={FaLocationDot} title="Location">
        121 Rock Sreet, 21 Avenue, New York,
        <br className="hidden md:block" /> NY 92103-9000
      </ContactItem>

      <ContactItem icon={MdEmail} title="Email">
        <Link href="">hi@email.com</Link>
      </ContactItem>
    </div>
  );
}
