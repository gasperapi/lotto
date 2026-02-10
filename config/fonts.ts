import { Fira_Code as FontMono, Prompt as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin", "thai"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
