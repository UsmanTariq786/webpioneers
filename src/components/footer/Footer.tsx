import Logo from "../ui/Logo"
import Link from "next/link"
import { Mail, Phone, X } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="text-white py-10 ">
      <div className="flex flex-col sm:flex-row justify-between items-start px-5 sm:px-20 gap-10">
        {/* Logo and Description */}
        <div className="flex-1 max-w-md space-y-4">
          <Logo />
          <p className="text-gray-400 w-[300px] text-sm">
            Web Panorama is a global agency that fuses brand goals with creative design and development solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex justify-center">
          <div>
            <h3 className="text-white font-medium mb-4">• Quick</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex-1 max-w-md">
          <h3 className="text-white font-medium mb-4">• Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-400" />
              <a
                href="mailto:business@webpanorama.com"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                business@webpanorama.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gray-400" />
              <a href="tel:+16305502000" className="text-gray-400 hover:text-white transition-colors text-sm">
                +1(630) 550-2000
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links Row */}
      <div className="w-full mt-12 px-5 sm:px-20 pt-8">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-medium">• Socials</h3>
            <button className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-[#F8F8F8]/90 text-lg hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-[#F8F8F8]/90 text-lg hover:text-white transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-[#F8F8F8]/90 text-lg hover:text-white transition-colors">
              Dribbble
            </Link>
            <Link href="#" className="text-[#D4541D] text-lg hover:text-[#D4541D]/80 transition-colors">
              Behance
            </Link>
            <Link href="#" className="text-[#F8F8F8]/90 text-lg hover:text-white transition-colors">
              WhatsApp
            </Link>
            <Link href="#" className="text-[#F8F8F8]/90 text-lg hover:text-white transition-colors">
              Twitter
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex flex-row flex-wrap justify-start gap-20">
          <Link href="#" className="text-[#F8F8F8]/90 text-[30px] hover:text-white transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="text-[#F8F8F8]/90 text-[30px] hover:text-white transition-colors">
            Instagram
          </Link>
          <Link href="#" className="text-[#F8F8F8]/90 text-[30px] hover:text-white transition-colors">
            Dribbble
          </Link>
          <Link href="#" className="text-[#D4541D]/70 text-[30px] hover:text-[#D4541D] transition-colors">
            Behance
          </Link>
          <Link href="#" className="text-[#F8F8F8]/90 text-[30px] hover:text-white transition-colors">
            WhatsApp
          </Link>
          <Link href="#" className="text-[#F8F8F8]/90 text-[30px] hover:text-white transition-colors">
            Twitter
          </Link>
        </div>

        <div className="mt-8">
          <Image src="/btn.svg" width={1100} height={300} alt="get in touch" className="w-full h-auto" />
        </div>

        <div className="flex justify-center items-center mt-4">
          <p className="text-[10px] text-[#F8F8F8]/70">© 2025, Web Pioneers, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
