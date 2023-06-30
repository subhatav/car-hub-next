import NavigationBar from "@/components/NavigationBar";
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
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
