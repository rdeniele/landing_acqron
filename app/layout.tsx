import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // You can adjust weights as needed
});

export const metadata: Metadata = {
  title: "Acqron",
  description:
    "Acqron is an emerging software development company founded specifically for idea-stage startups! Contact us at info@acqron.com and let’s start building your dream product!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
