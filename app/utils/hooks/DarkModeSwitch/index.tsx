"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";

export default function useDarkSide(): [
  string,
  Dispatch<SetStateAction<string>>,
] {
  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined" ? localStorage.theme : "light",
  );
  const colorTheme: string = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
