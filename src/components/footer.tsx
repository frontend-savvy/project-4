import { FooterLink } from "@/lib/types";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import FooterLinksGroup from "./footer-course-links";
import Logo from "./logo";
import SocialIcons from "./social-icons";
import Wrapper from "./wrapper";

const footerCourseLinks: FooterLink[] = [
  { id: 1, label: "Private Lessons", href: "/courses/private-lessons" },
  { id: 2, label: "Online Learning", href: "/courses/online-learning" },
  { id: 3, label: "English for Kids", href: "/courses/english-for-kids" },
  { id: 4, label: "Long-Term Courses", href: "/courses/long-term" },
  { id: 5, label: "English for Business", href: "/courses/business" },
];
export const helpSupportLinks: FooterLink[] = [
  { id: 1, label: "Help Center", href: "/help-center" },
  { id: 2, label: "Support", href: "/support" },
  { id: 3, label: "Resources", href: "/resources" },
  { id: 4, label: "Our Blog", href: "/blog" },
  { id: 5, label: "Our Partners", href: "/partners" },
];
export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-10">
      <Wrapper>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-center pb-10">
          <div>
            <Logo variant="light" />
            <div className="mt-5 flex flex-col gap-4">
              <p className="leading-[1.6] flex gap-2 ">
                <FaLocationDot className="text-xl  text-secondary" /> 121 Rock
                Sreet, 21 Avenue, New York, NY 92103-9000
              </p>
              <p className="leading-[1.6] flex gap-2 ">
                <FaPhone className="text-xl text-secondary" />
                +123 456 789
              </p>
              <p className="leading-[1.6] flex gap-2 ">
                <MdEmail className="text-xl text-secondary" />
                hi@email.com
              </p>

              <SocialIcons />
            </div>
          </div>
          <div className="col">
            <FooterLinksGroup links={footerCourseLinks} title="Courses" />
          </div>
          <div className="col">
            <FooterLinksGroup links={helpSupportLinks} title="Help & Support" />
          </div>
        </div>
      </Wrapper>
      <div className="bg-gray-dark py-5 text-center">
        <small className="capitalize mt-5 text-sm tracking-wider">
          &copy; copyright <span className="text-secondary">2025</span>, all
          right reserved.
        </small>
      </div>
    </footer>
  );
}
