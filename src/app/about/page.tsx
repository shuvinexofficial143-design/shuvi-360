import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "About" };
export default function About(){return <section className="shell section"><p className="eyebrow">About Shuvi 360</p><h1>Creativity meets technology.</h1><p>Shuvi 360 is a new digital agency focused on practical marketing, creative and technology solutions for businesses, brands and professionals in Indore. We plan consultations around individual requirements; we do not claim an established office or publish unverified client results.</p><Link className="button" href="/#services">Explore services</Link></section>}
