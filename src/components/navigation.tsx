import { Route } from "@/lib/types";
import Link from "next/link";

const routes: Route[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Pages", path: "/pages" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navigation() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-6">
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              className="uppercase font-open-sans font-semibold py-3 border-b-2 border-transparent hover:border-secondary transition-colors duration-150"
              href={route.path}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
