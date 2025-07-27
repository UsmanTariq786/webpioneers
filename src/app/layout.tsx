import type { Metadata } from "next";
import rubik from "./fonts"; // Import Rubik font
import "./globals.css";
import Testimonials from "@/components/testiminals/Testimonials";
import PioneerDetail from "@/components/pioneerDetail/PioneerDetail";
import ServiceExcellenceGrid from "@/components/ServiceExcellenceGrid/ServiceExcellenceGrid";
import { HeroStatement } from "@/components/HeroStatement/HeroStatement";
import { FAQAccordion } from "@/components/fAQAccordion/FAQAccordion";
import ContactForm from "@/components/contactForm/ContactForm";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "webpioneers",
  description: "A design agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <Header />
        {children}
        <Testimonials />
        <PioneerDetail />
        <ServiceExcellenceGrid />
        <FAQAccordion />
        <HeroStatement />
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}