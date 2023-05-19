import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
