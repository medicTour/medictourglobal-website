"use client";

import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust threshold based on when you want nav to become fixed
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header>
      <TopBar
        scrolled={scrolled}
        mobileOpen={mobileOpen}
        toggleMobile={toggleMobile}
      />
      <MainNav scrolled={scrolled} />
      <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />
    </header>
  );
}