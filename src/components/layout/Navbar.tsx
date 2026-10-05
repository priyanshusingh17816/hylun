"use client";

import {
  Search,
  Heart,
  ShoppingBag,
  User,
} from "lucide-react";

import AnnouncementBar from "./AnnouncementBar";
import Container from "../ui/Container";

const menuItems = [
  "New In",
  "Earrings",
  "Necklaces",
  "Rings",
  "Bracelets",
  "Best Sellers",
];

export default function Navbar() {
  return (
    <>
      <AnnouncementBar />

      <header className="sticky top-0 z-50 bg-brand border-b border-brand backdrop-blur-md">
        <Container className="h-24 flex items-center justify-between">

          {/* Logo */}

          <div className="flex-shrink-0">

            {/* Replace with Image later */}

            <h1
              className="
                text-5xl
                font-light
                tracking-[0.18em]
                text-burgundy
                cursor-pointer
                transition-all
                duration-300
                hover:text-rose
                hover:tracking-[0.22em]
              "
            >
              HYLUN
            </h1>

          </div>

          {/* Menu */}

          <nav className="hidden lg:block">

            <ul className="flex items-center gap-10 uppercase text-sm tracking-[0.18em] text-brand">

              {menuItems.map((item) => (

                <li
                  key={item}
                  className="
                    group
                    relative
                    cursor-pointer
                    transition-colors
                    duration-300
                    hover:text-rose
                  "
                >
                  {item}

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      w-0
                      bg-rose
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />

                </li>

              ))}

            </ul>

          </nav>

          {/* Icons */}

          <div className="flex items-center gap-6 text-brand">

            <Search
              size={22}
              className="
                cursor-pointer
                transition-all
                duration-300
                hover:text-rose
                hover:scale-110
              "
            />

            <Heart
              size={22}
              className="
                cursor-pointer
                transition-all
                duration-300
                hover:text-rose
                hover:scale-110
              "
            />

            <ShoppingBag
              size={22}
              className="
                cursor-pointer
                transition-all
                duration-300
                hover:text-rose
                hover:scale-110
              "
            />

            <User
              size={22}
              className="
                cursor-pointer
                transition-all
                duration-300
                hover:text-rose
                hover:scale-110
              "
            />

          </div>

        </Container>
      </header>
    </>
  );
}