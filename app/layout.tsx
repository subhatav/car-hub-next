import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata = {
  title: "Cars Hub Application",
  description: "Showcase for all car enthusiasts!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
