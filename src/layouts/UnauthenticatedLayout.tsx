import { SimpleNavbar } from "@/components/navigation/navbars/SimpleNavbar";
import { useOutlet } from "react-router";
import SimpleFooter from "@/components/navigation/footers/SimpleFooter";
import { Logo } from "@/demo/Logo";
import ScreenContainer from "@/components/containers/ScreenContainer";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import XIcon from "@/components/icons/XIcon";
import GithubIcon from "@/components/icons/GithubIcon";
/**
 * UnauthenticatedLayout Component
 *
 * This component serves as a wrapper for routes that do not require authentication.
 * It includes the AnalyticsContainer for tracking user actions on public pages.
 *
 * @component
 * @example
 * <Route element={<UnauthenticatedLayout />}>
 *   <Route path="/login" element={<LoginPage />} />
 *   <Route path="/signup" element={<SignupPage />} />
 * </Route>
 */
const UnauthenticatedLayout = () => {
  const outlet = useOutlet();

  return (
    <ScreenContainer>
      <SimpleNavbar
        mainLinks={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "About", href: "/about" },
        ]}
        secondaryLinks={[
          { label: "FAQ", href: "/faq", type: "link" },
          { label: "Sign Up", href: "/signup", type: "button" },
        ]}
        title="My App"
        logo={<Logo className="h-10 w-auto" />}
      />
      {outlet}
      <SimpleFooter
        mainLinks={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "About", href: "/about" },
          { label: "FAQ", href: "/faq" },
          { label: "Privacy Policy", href: "/#" },
          { label: "Terms of Service", href: "/#" },
        ]}
        socialLinks={[
          { label: "YouTube", href: "https://www.youtube.com/", icon: YouTubeIcon },
          {
            label: "Instagram",
            href: "https://www.instagram.com/",
            icon: InstagramIcon,
          },
          {
            label: "Facebook",
            href: "https://www.facebook.com/",
            icon: FacebookIcon,
          },
          {
            label: "X",
            href: "https://www.x.com/",
            icon: XIcon,
          },
          {
            label: "Github",
            href: "https://www.github.com/",
            icon: GithubIcon,
          },
        ]}
        copyright="© 2025 My App. All rights reserved."
      />
    </ScreenContainer>
  );
};

export default UnauthenticatedLayout;
