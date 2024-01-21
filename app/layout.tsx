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

export const metadata: Metadata = {
  title: "Marked",
  description: "Web develop",
};

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
