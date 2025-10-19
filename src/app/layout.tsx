import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sanchit Dikshit - Full Stack Developer",
  description:
    "Crafting digital experiences with code & creativity. Portfolio, projects, and contact.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sanchit Dikshit - Full Stack Developer",
    description:
      "Crafting digital experiences with code & creativity. Portfolio, projects, and contact.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchit Dikshit - Full Stack Developer",
    description:
      "Crafting digital experiences with code & creativity. Portfolio, projects, and contact.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[color:var(--dark-900)] text-[color:var(--foreground)]`}>
        <Navigation />
        {children}
        <Footer />
        <Toaster richColors theme="dark" />
      </body>
    </html>
  );
}
