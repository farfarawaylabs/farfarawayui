"use client";

import { SimpleHeroProps } from "./interfaces";
import { ChevronRight } from "lucide-react";
export default function SimpleCenteredHero({
  title,
  description,
  primaryButton,
  secondaryButton,
  announcement,
  background,
}: SimpleHeroProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {background}
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          {announcement && (
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <a href={announcement.href}>
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  {announcement.label}
                  <span className="text-indigo-600">
                    <ChevronRight className="inline" />
                  </span>
                </div>
              </a>
            </div>
          )}
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              {title}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {primaryButton && (
                <a
                  href={primaryButton.href}
                  onClick={primaryButton.onClick ? primaryButton.onClick : undefined}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {primaryButton.label}
                </a>
              )}
              {secondaryButton && (
                <a
                  href={secondaryButton.href}
                  onClick={secondaryButton.onClick ? secondaryButton.onClick : undefined}
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  {secondaryButton.label}
                </a>
              )}
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
