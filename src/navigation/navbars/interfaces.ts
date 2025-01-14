export interface NavbarProps {
  title: string;
  logo?: React.ReactNode;
  mainLinks: {
    label: string;
    href: string;
  }[];
  secondaryLinks: {
    label: string;
    href: string;
    type: "button" | "link";
  }[];
}

export type MobileNavbarProps = Omit<NavbarProps, "title">;
