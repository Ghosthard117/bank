import { NAV_LINKS } from "@/constants";
import Link from "next/link";


export default function Navbar() {
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-5">
      {NAV_LINKS.map(link => (
        <Link
          href={link.href}
          key={link.key}
          className="border-b-2 border-transparent hover:border-black transition-colors duration-300 py-2"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  )
}