"use client";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

type ISidebarState = "open" | "closed";
const storageKey = "SidebarState";

export default function useSidebar(defaultState: ISidebarState = "closed") {
  const [sidebarState, setSidebarState] = useState<ISidebarState>(defaultState);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    let state: ISidebarState =
      (localStorage.getItem(storageKey) as ISidebarState) || defaultState;

    setSidebarState(state);
  }, [defaultState]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(storageKey, sidebarState);
    }

    setMounted(true);
  }, [mounted, sidebarState]);

  const toggleSidebar = useCallback(() => {
    setSidebarState((prev) => (prev === "open" ? "closed" : "open"));
  }, []);

  return {
    mounted,
    sidebarState,
    toggleSidebar,
  };
}
