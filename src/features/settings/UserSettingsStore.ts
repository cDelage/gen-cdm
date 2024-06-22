import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserSettingsStore = {
  token: string;
  setToken: (token: string) => void;
};

export const useUserSettingsStore = create(
  persist<UserSettingsStore>(
    (set) => ({
      token: "",
      setToken: (token: string) => {
        set({
          token,
        });
      },
    }),
    {
      name: "user-settings-store",
    }
  )
);
