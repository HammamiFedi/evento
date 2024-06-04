"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "./logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/events/all", label: "All Events" },
];

function Header() {
  const activePathname = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {links.map((link) => (
            <li
              key={link.href}
              className={cn(
                "flex items-center hover:text-white relative transition",
                {
                  "text-white": activePathname === link.href,
                  "text-white/50": activePathname !== link.href,
                }
              )}
            >
              <Link href={link.href}>{link.label}</Link>
              {activePathname === link.href && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
