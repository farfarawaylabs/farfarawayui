import * as Headless from "@headlessui/react";
import React, { forwardRef } from "react";
import { NavLink } from "react-router";

export const Link = forwardRef(function Link(
  props: { href: string } & React.ComponentPropsWithoutRef<"a">,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <NavLink to={props.href} {...props} ref={ref} />
    </Headless.DataInteractive>
  );
});
