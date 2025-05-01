"use client";
import { Route } from "@/lib/types";
import { XIcon } from "lucide-react";
import { motion } from "motion/react";

import Link from "next/link";

const routes: Route[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Pages", path: "/pages" },
  { name: "Contact Us", path: "/contact" },
];
export default function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-10 bg-black/95 w-full h-screen text-white"
    >
      <div className="">
        <ul className="mt-12">
          {routes.map((route) => (
            <li key={route.path} className="text-center w-full py-2 ">
              <Link className="font-open-sans text-xl" href={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <XIcon className="" />
        </div>
      </div>
    </motion.nav>
  );
}
