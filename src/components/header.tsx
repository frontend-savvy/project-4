"use client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Logo from "./logo";
import MobileMenuToggle from "./mobile-menu-toggle";
import MobileNav from "./mobile-nav";
import Navigation from "./navigation";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="py-5 border">
      <Wrapper>
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex gap-8 items-center ">
            <Navigation />
            <MobileMenuToggle onToggle={handleToggle} />
            <Button className="hidden md:block">Join Us</Button>
          </div>
        </div>
      </Wrapper>
      <AnimatePresence>
        {isOpen && <MobileNav onClose={handleClose} />}
      </AnimatePresence>
    </header>
  );
}
