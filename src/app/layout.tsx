import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Shuvi 360 | Your Digital Growth Partner", template: "%s | Shuvi 360" },
  description: "Marketing, creativity and technology solutions for businesses and professionals in Indore.",
  robots: { index: false, follow: false }
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>
    <header className="header"><div className="shell nav"><Link className="wordmark" href="/">shuvi<span>360</span><i /></Link><nav aria-label="Main navigation"><Link href="/#services">Services</Link><Link href="/about">About</Link></nav></div></header>
    <main id="main">{children}</main>
    <footer className="shell footer"><Link href="/">Shuvi 360</Link><span>Your Digital Growth Partner · Indore, India</span><span>Development preview</span></footer>
  </body></html>;
}
