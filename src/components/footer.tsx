import Link from "next/link";

const links = [
  {
    href: "/terms-conditions",
    label: "Terms & Conditions",
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
];

function Footer() {
  return (
    <footer className="mt-auto flex justify-between items-center h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2024 Hammami Fedi. All Rights Reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
