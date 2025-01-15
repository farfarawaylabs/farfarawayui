import { useNavigate } from "react-router";
import { Avatar } from "@/components/avatars/Avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/misc/Dropdown";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "../BaseSidebar";
import { HomeIcon, ChevronUpIcon, Mic2Icon, LogOutIcon, BookOpenIcon } from "lucide-react";
import { useUser } from "@/demo/state/authState";
import { signOut } from "@/demo/state/authState";

/**
 * AuthenticatedLayout Component
 *
 * This component serves as a wrapper for routes that require authentication.
 * It checks if the user is authenticated and redirects to the login page if not.
 * It also includes the AnalyticsContainer for tracking user actions.
 *
 * @component
 * @example
 * <Route element={<AuthenticatedLayout />}>
 *   <Route path="/dashboard" element={<Dashboard />} />
 * </Route>
 */
const AuthenticatedUserSidebar = () => {
  const user = useUser();
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarHeader>
        <Dropdown>
          <DropdownButton as={SidebarItem} className="lg:mb-2.5" onClick={() => navigate("/")}>
            <Avatar src="/vite.svg" />
            <SidebarLabel>My App</SidebarLabel>
          </DropdownButton>
        </Dropdown>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/app/home">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/app/voices">
            <Mic2Icon />
            <SidebarLabel>Voices</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/app/content">
            <BookOpenIcon />
            <SidebarLabel>Content</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSection className="max-lg:hidden">
          <SidebarHeading>Help</SidebarHeading>
          <SidebarItem href="#">Coming soon...</SidebarItem>
        </SidebarSection>
        <SidebarSpacer />
      </SidebarBody>
      <SidebarFooter className="max-lg:hidden">
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <span className="flex min-w-0 items-center gap-3">
              <Avatar src={user!.avatarUrl} className="size-10" square />
              <span className="min-w-0">
                <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                  {user?.firstName}
                </span>
                <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                  {user?.email}
                </span>
              </span>
            </span>
            <ChevronUpIcon />
          </DropdownButton>
          <DropdownMenu className="min-w-60" anchor="top start">
            {/* <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider /> */}
            <DropdownItem onClick={signOut}>
              <LogOutIcon className="size-4 mr-2" />
              <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AuthenticatedUserSidebar;
