import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const getManrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const logoUrl = "https://res.cloudinary.com/dcwzvtpoj/image/upload/v1750636949/Arrow-drive_rlhpbd.png"

export const metadata: Metadata = {
  title: "Arrow Drive",
  description:
    "Arrow Drive is built to change the game in transportation with real-time updates on routes, using developed mapping technologies, shaping the future of transportation.",
    authors: {
      name: "Oluwapelumi Fafiyebi",
      url: "https://oluwapelumi-dev.netlify.app",
    },
    applicationName: "Arrow Drive",
    robots: "index, follow",
    keywords: [
      "Arrow Drive",
      "Map",
      "Seamless trip",
      "Nigeria",
      "jay25inteserve",
    ],
    openGraph: {
      type: "website",
      title: "Arrow Drive - Your smart mobility and navigation technology company in Nigeria.",
      description: "Arrow Drive is built to change the game in transportation with real-time updates on routes, using developed mapping technologies, shaping the future of transportation.",
      images: [
        {
          url: logoUrl,
          width: 800,
          height: 600,
          alt: "Arrow Drive Logo",
        }
      ],
      siteName: "Arrow Drive",
    },
    icons: {
      icon: logoUrl,
      shortcut: logoUrl,
      apple: logoUrl,
    },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${getManrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
