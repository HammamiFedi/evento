import { ReactNode } from "react";
import Link from "next/link";

type PaginationButtonProps = {
  children: ReactNode;
  href: string;
};

function PaginationButton({ children, href }: PaginationButtonProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm"
    >
      {children}
    </Link>
  );
}

export default PaginationButton;
