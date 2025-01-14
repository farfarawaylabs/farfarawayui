import { navigateTo } from "@/lib/navigationHelpers";
import { observable } from "@legendapp/state";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { syncObservable } from "@legendapp/state/sync";

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
}

interface AuthState {
  user: User;
}

export const authState = observable<AuthState>();

syncObservable(authState, {
  persist: {
    name: "authState",
    plugin: ObservablePersistLocalStorage,
  },
});

export const useUser = () => authState.user.get();

export const useUserId = () => authState.user.peek()?.id;

export const useIsAuthenticated = () => authState.user.peek() !== undefined;

export const signOut = async () => {
  authState.user.set(undefined);
  navigateTo("/");
};

export const signInWithEmail = async (email: string) => {
  authState.user.set({
    id: "userId",
    email: email,
    firstName: "John",
    lastName: "Doe",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });

  navigateTo("/app/home");
};

export const signInWithGithub = async () => {
  authState.user.set({
    id: "userId",
    email: "test@test.com",
    firstName: "John",
    lastName: "Doe",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });

  navigateTo("/app/home");
};

export const signInWithGoogle = async () => {
  authState.user.set({
    id: "userId",
    email: "test@test.com",
    firstName: "John",
    lastName: "Doe",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });

  navigateTo("/app/home");
};
