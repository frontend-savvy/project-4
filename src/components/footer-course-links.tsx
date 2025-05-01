import { FooterLink } from "@/lib/types";
import Link from "next/link";

type FooterLinksGroupProps = {
  title?: string;
  links: FooterLink[];
};

export default function FooterLinksGroup({
  title,
  links,
}: FooterLinksGroupProps) {
  return (
    <>
      <h3 className="font-noto-sans font-bold text-2xl capitalize">{title}</h3>
      <ul className="flex flex-col gap-4 mt-5">
        {links.map((item) => (
          <li key={item.id}>
            <Link
              className="hover:underline underline-offset-8 decoration-secondary decoration-2 transition"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
