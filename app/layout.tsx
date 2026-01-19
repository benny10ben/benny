import type { Metadata } from "next";
import { NTR, Fira_Code } from "next/font/google";
import "./globals.css";

// Load NTR (Geometric Sans) - Only weight 400 is available
const ntr = NTR({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-sans",
  display: "swap",
});

// Load Fira Code (Monospace)
const firaCode = Fira_Code({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Ben | Software Developer",
  description: "Portfolio of a software developer specializing in Next.js and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ntr.variable} ${firaCode.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}>
        {children}
      </body>
    </html>
  );
}