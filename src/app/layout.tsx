import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";
import { Roboto } from "next/font/google";



export const metadata: Metadata = {
  title: 'Doc Barnet | Premium Grooming Salon Gloucester',
  description: 'Experience premium barbering, ladies hair, and grooming at Doc Barnet Gloucester Quays. Now open.',
  openGraph: {
    "title": "Doc Barnet Grooming Salon",
    "siteName": "Doc Barnet",
    "description": "Premium grooming and hair services at Gloucester Quays."
  },
};




const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${roboto.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
