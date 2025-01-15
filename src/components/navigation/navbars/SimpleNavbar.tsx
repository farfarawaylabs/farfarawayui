"use client";

import { Popover, PopoverButton, PopoverBackdrop, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/containers/Container";
import { NavLink } from "@/components/navigation/NavLink";
import { MobileNavbarProps, NavbarProps } from "./interfaces";

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <PopoverButton className="block w-full p-2">{children}</PopoverButton>;
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx("origin-center transition", open && "scale-90 opacity-0")}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx("origin-center transition", !open && "scale-90 opacity-0")}
      />
    </svg>
  );
}

function MobileNavigation({ mainLinks, secondaryLinks }: MobileNavbarProps) {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {mainLinks.map((link) => (
          <MobileNavLink key={link.href} href={link.href}>
            {link.label}
          </MobileNavLink>
        ))}
        <hr className="m-2 border-slate-300/40" />
        {secondaryLinks
          .filter((link) => link.type === "link")
          .map((link) => {
            return (
              <MobileNavLink key={link.href} href={link.href}>
                {link.label}
              </MobileNavLink>
            );
          })}
      </PopoverPanel>
    </Popover>
  );
}

export function SimpleNavbar({ logo, mainLinks, secondaryLinks }: NavbarProps) {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <a href="#" aria-label="Home">
              {logo}
            </a>

            <div className="hidden md:flex md:gap-x-6">
              {mainLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  className="inline-block rounded-lg px-4 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              {secondaryLinks
                .filter((link) => link.type === "link")
                .map((link) => {
                  return (
                    <NavLink key={link.href} href={link.href}>
                      {link.label}
                    </NavLink>
                  );
                })}
            </div>
            {secondaryLinks
              .filter((link) => link.type === "button")
              .map((link) => {
                return (
                  <NavLink key={link.href} href={link.href}>
                    <Button>{link.label}</Button>
                  </NavLink>
                );
              })}

            <div className="-mr-1 md:hidden">
              <MobileNavigation mainLinks={mainLinks} secondaryLinks={secondaryLinks} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
