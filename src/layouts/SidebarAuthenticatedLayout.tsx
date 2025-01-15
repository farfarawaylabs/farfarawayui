import { signOut } from "@/demo/state/authState";

import { observer } from "@legendapp/state/react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useUser } from "@/demo/state/authState";

import AuthenticatedUserSidebar from "@/components/sidebars/AuthenticatedUserSidebar/AuthenticatedUserSidebar";
import { NavbarItem } from "@/components/navigation/navbars/TailwindNavbar";
import * as Headless from "@headlessui/react";
import {
  Navbar,
  NavbarSection,
  NavbarSpacer,
} from "@/components/navigation/navbars/TailwindNavbar";
import { DropdownItem, DropdownLabel } from "@/components/misc/Dropdown";
import { DropdownDivider } from "@/components/misc/Dropdown";
import { DropdownMenu } from "@/components/misc/Dropdown";
import { Avatar } from "@/components/avatars/Avatar";
import { DropdownButton } from "@/components/misc/Dropdown";
import { Dropdown } from "@/components/misc/Dropdown";
import { LogOutIcon } from "lucide-react";

function OpenMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
    </svg>
  );
}

function CloseMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

function MobileSidebar({
  open,
  close,
  children,
}: React.PropsWithChildren<{ open: boolean; close: () => void }>) {
  return (
    <Headless.Dialog open={open} onClose={close} className="lg:hidden">
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 transition data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <Headless.DialogPanel
        transition
        className="fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out data-[open]:-translate-x-full"
      >
        <div className="flex h-full flex-col rounded-lg bg-white shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
          <div className="-mb-3 px-4 pt-3">
            <Headless.CloseButton as={NavbarItem} aria-label="Close navigation">
              <CloseMenuIcon />
            </Headless.CloseButton>
          </div>
          {children}
        </div>
      </Headless.DialogPanel>
    </Headless.Dialog>
  );
}

const SidebarAuthenticatedLayout = observer(function AuthenticatedLayout() {
  const user = useUser();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

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
    <div className="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
      {/* Sidebar on desktop */}
      <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">
        <AuthenticatedUserSidebar />
      </div>

      {/* Sidebar on mobile */}
      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        <AuthenticatedUserSidebar />
      </MobileSidebar>

      {/* Navbar on mobile */}
      <header className="flex items-center px-4 lg:hidden">
        <div className="py-2.5">
          <NavbarItem onClick={() => setShowSidebar(true)} aria-label="Open navigation">
            <OpenMenuIcon />
          </NavbarItem>
        </div>
        <div className="min-w-0 flex-1">
          <Navbar>
            <NavbarSpacer />
            <NavbarSection>
              <Dropdown>
                <DropdownButton as={NavbarItem}>
                  <Avatar src={user?.avatarUrl} square />
                </DropdownButton>
                <DropdownMenu className="min-w-64" anchor="bottom end">
                  {/* <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem> */}
                  <DropdownDivider />
                  <DropdownItem onClick={signOut}>
                    <LogOutIcon className="size-4 mr-2" />
                    <DropdownLabel>Sign out</DropdownLabel>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarSection>
          </Navbar>
        </div>
      </header>

      {/* Content */}
      <main className="flex flex-1 flex-col pb-2 w-full max-w-full overflow-x-hidden lg:min-w-0 lg:pl-64 lg:pr-2 lg:pt-2">
        <div className="flex grow px-3 py-4 sm:p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          <div className="flex-grow w-full max-w-6xl mx-auto overflow-x-hidden">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
});

export default SidebarAuthenticatedLayout;