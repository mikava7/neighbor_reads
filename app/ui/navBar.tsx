import React from "react";
import Link from "next/link";

const links = [
  { href: "/books", label: "Books" },
  { href: "/reviews", label: "Reviews" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/cabinet", label: "Cabinet" },
];

export default function NavBar() {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar flex items-center justify-between px-8 max-w-6xl mx-auto">
        <Link href="/" className="btn btn-primary">
          Neighbor Reads
        </Link>
        <ul className="menu menu-horizontal flex space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="capitalize">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
