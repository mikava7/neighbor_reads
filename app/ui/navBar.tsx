import React from "react";
import Link from "next/link";
const links = [
  { href: "/books", label: "books" },
  { href: "/reviews", label: "reviews" },
  { href: "/recomendations", label: "recomendations" },
  { href: "/cabinet", label: "cabinet" },
];
export default function NavBar() {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto">
        <Link href="/" className="btn btn-primary">
          Neighbor Reads
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} className="capitalize">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
