import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  variable: "--font-poppins",
  fallback: ["Roboto", "sans-serif"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Papaya Video Sharing",
  description: "This is a Next.js solo video sharing project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>{children}</body>
    </html>
  );
}
