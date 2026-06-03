import type { Metadata } from "next";
import "./globals.css";
import SidebarWrapper from "@/components/SidebarWrapper";

export const metadata: Metadata = {
  title: "Swapnil's Studio",
  description: "Azure + AI course slides, scripts and YouTube assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#060c18] h-screen overflow-hidden">
        <SidebarWrapper>{children}</SidebarWrapper>
      </body>
    </html>
  );
}
