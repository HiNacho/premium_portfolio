import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HiNacho",
  description: "Victor Iheanacho (Nacho.AI) is an AI Engineer, Data Scientist, and Healthcare AI Innovator building intelligent systems that transform healthcare, business, education, and society through data, machine learning, NLP, computer vision, and automation.",
  keywords: [
    "Victor Iheanacho",
    "Nacho.AI",
    "AI Engineer Africa",
    "Data Scientist Nigeria",
    "Healthcare AI Innovator",
    "NLP",
    "Computer Vision",
    "Automation",
    "Medical Doctor Data Science"
  ],
  authors: [{ name: "Victor Iheanacho", url: "https://nacho.ai" }],
  creator: "Victor Iheanacho",
  publisher: "Victor Iheanacho",
  openGraph: {
    title: "HiNacho",
    description: "Building intelligent systems for Africa and beyond. Merging healthcare, data intelligence, and AI.",
    url: "https://nacho.ai",
    siteName: "Nacho.AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HiNacho",
    description: "Building intelligent systems for Africa and beyond. Merging healthcare, data intelligence, and AI.",
    creator: "@vic_nacho", // Standard placeholder based on request
  },
  icons: {
    icon: "/icon.png",
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
      className={`${spaceGrotesk.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="bg-[#FAF8F3] text-[#4B2E2A] font-sans antialiased min-h-screen flex flex-col selection:bg-[#F47C20]/20 selection:text-[#F47C20]">
        {children}
      </body>
    </html>
  );
}
