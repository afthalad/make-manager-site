import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: site.appName,
    template: `%s · ${site.appName}`,
  },
  description: "See your Make scenarios and turn them on or off from your iPhone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>
        <SiteHeader />
        <main className="container main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
