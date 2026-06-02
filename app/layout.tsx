import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Azure Channel Studio",
  description: "PPT slides and scripts for Azure + AI YouTube series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#060c18] h-screen overflow-hidden">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 flex flex-col h-full overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
