import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/navigation/TopBar";
import Sidebar from "@/components/navigation/Sidebar";
import Footbar from "@/components/navigation/Footbar";

export const metadata: Metadata = {
  title: "Ahmet Deger",
  description: "Learn more about Ahmet Deger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className='dark'>
      <body
        className={`antialiased`}
      >
        <div className="flex flex-col md:flex-row h-screen">
          <TopBar />
          <Sidebar />

          <main className="flex-1 overflow-y-auto px-5 pt-20">
            {children}
          </main>

          <Footbar />
        </div>
      </body>
    </html>
  );
}
