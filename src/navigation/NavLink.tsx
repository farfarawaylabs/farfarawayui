import { NavLink as RouterNavLink } from "react-router";

export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <RouterNavLink to={href} className={` ${className}`}>
      {children}
    </RouterNavLink>
  );
}

// export function NavLink({
//   href,
//   children,
//   className,
// }: {
//   href: string;
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <a href={href} className={` ${className}`}>
//       {children}
//     </a>
//   );
// }
