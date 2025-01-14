import { signOut } from "@/demo/state/authState";

import { observer } from "@legendapp/state/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useUser } from "@/demo/state/authState";
import ScreenContainer from "@/components/containers/ScreenContainer";
import LoggedInSimpleNavbar from "@/navigation/navbars/LoggedInSimpleNavbar";
import { Logo } from "@/demo/Logo";

const AuthenticatedLayout = observer(function AuthenticatedLayout() {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      // Do some check to check the session with your auth provider or backend

      if (false) {
        await signOut();
        navigate("/");
      }
    };
    if (!user) {
      navigate("/");
    }
    checkSession();
  }, [user, navigate]);

  return (
    <ScreenContainer>
      <LoggedInSimpleNavbar
        logo={<Logo className="h-8 w-auto" />}
        links={[
          { label: "Dashboard", href: "/app/home" },
          { label: "App Actions", href: "/actions" },
          { label: "App Settings", href: "/settings" },
        ]}
        currentPageUrl="/app/home"
        actionButton={{ label: "Important Action", href: "/new-job" }}
        avatarImageUrl={user?.avatarUrl || ""}
        userMenuItems={[
          { label: "Profile", href: "/profile" },
          { label: "Settings", href: "/settings" },
          { label: "Sign out", href: "", onClick: () => signOut() },
        ]}
      />
      <Outlet />
    </ScreenContainer>
  );
});

export default AuthenticatedLayout;
