"use client";
import { NAV_LINKS } from "@/constant";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Butoon";

const Navbar = () => {
  // Manejando estado del menú móvil
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <nav
      className="flex items-center justify-between max-container px-12 z-30 py-2 shadow-xl bg-white 
        rounded-full ring-1 ring-slate-100 fixed w-[95%] left-[50%] top-1 translate-x-[-50%]"
    >
      {/* LOGO */}
      <Link href="/" className="bold-28">
        <span>LOGO</span>
      </Link>

      {/* DESKTOP MENU */}
      <ul className="hidden lg:flex h-full">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex gap-2 mx-8 relative text-gray-500 group"
          >
            <Image
              src={link.iconURL}
              alt={link.label}
              height={20}
              width={20}
              className="h-auto w-4"
            />
            {link.label}
            {/* Línea subrayada */}
            <span
              className="inline-block absolute h-[2px] w-0 bg-black -bottom-2 
              transition-all duration-500 group-hover:w-full"
            ></span>
          </Link>
        ))}
      </ul>

      {/* BOTÓN LOGIN DESKTOP */}
      <div className="hidden lg:block">
        <Button
          type="button"
          title="Login"
          icon="assets/user.svg"
          variant="btn_dark_rounded"
        />
      </div>

      {/* BOTÓN MOBILE MENU */}
      <Image
        src={menuOpened ? "assets/close.svg" : "assets/menu.svg"}
        alt="menuicon"
        height={28}
        width={28}
        className="lg:hidden inline-block cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      />

      {/* MOBILE MENU */}
      {menuOpened && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-30"
          onClick={toggleMenu}
        ></div>
      )}
      <ul
        className={`${
          menuOpened ? "right-0" : "right-[-100%]"
        } flex flex-col justify-center p-12 fixed top-14 bg-slate-100 
        rounded-lg transition-all duration-500 shadow-md z-30 gap-6`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex gap-1 mx-6 relative text-gray-500 group"
          >
            <Image
              src={link.iconURL}
              alt={link.label}
              height={20}
              width={20}
              className="h-auto w-4"
            />
            {link.label}
            {/* Línea subrayada */}
            <span
              className="inline-block absolute h-[2px] w-0 bg-black -bottom-2 
              transition-all duration-500 group-hover:w-full"
            ></span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
