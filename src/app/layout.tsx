import type { Metadata } from "next";
import rubik from "./fonts"; // Import Rubik font
import "./globals.css";
import Testimonials from "@/Components/testiminals/Testimonials";
import PioneerDetail from "@/Components/pioneerDetail/PioneerDetail";
import ServiceExcellenceGrid from "@/Components/ServiceExcellenceGrid/ServiceExcellenceGrid";
import { HeroStatement } from "@/Components/HeroStatement/HeroStatement";
import { FAQAccordion } from "@/Components/fAQAccordion/FAQAccordion";
import ContactForm from "@/Components/contactForm/ContactForm";
import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";

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