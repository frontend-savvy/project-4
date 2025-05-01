import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
export default function SocialIcons() {
  return (
    <div className="flex gap-4 items-center">
      <FaFacebookF className="text-secondary" />
      <BsTwitterX className="text-secondary" />
      <FaInstagram className="text-secondary" />
    </div>
  );
}
