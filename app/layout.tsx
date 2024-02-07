import type { Metadata } from "next";
import "./globals.css";
import {
  crimson,
  karla,
  montserrat,
  noto,
  oswald,
  outfit,
} from "./theme/fonts/fonts";

import "@splidejs/react-splide/css";

export const metadata: Metadata = {
  title: "Marked | Web Developer",
  description:
    "HEY THERE, I'M MARK—YOUR FRIENDLY WEB DEVELOPER. I specialize in bringing your ideas to life, crafting bespoke websites that not only captivate but convert. Whether you're a startup ready to make your mark or an established business seeking a digital facelift, Let's build something extraordinary together.",
};

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${oswald.variable} ${karla.variable} ${noto.variable} ${crimson.variable} ${montserrat.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
