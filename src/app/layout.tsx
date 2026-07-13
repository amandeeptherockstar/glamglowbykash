import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glam & Glow by Kash — Nails, Makeup, Hair, Skin & Nail Education",
  description:
    "Glam & Glow by Kash — premium nail extensions, gel & acrylic nails, manicure & pedicure, makeup, hairstyling and skin services in Bhatwan Wala. Certified nail educator with 3+ years of experience.",
  keywords: [
    "GlamGlow by Kash",
    "nail salon",
    "nail extensions",
    "nail course",
    "makeup artist",
    "manicure pedicure",
    "Bhatwan Wala",
  ],
  openGraph: {
    title: "Glam & Glow by Kash",
    description:
      "Nails, makeup, hair & skin services + professional nail education. Certified nail artist with 3+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
