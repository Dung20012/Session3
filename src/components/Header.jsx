"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-4 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              <span className="text-primary">White</span>
              <span className="text-purple-600">pace</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#products" className="text-gray-700 hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="#solutions" className="text-gray-700 hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="#resources" className="text-gray-700 hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary transition-colors">
              Pricing
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Login
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">Try Whitepace free</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link href="#products" className="text-gray-700 hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="#solutions" className="text-gray-700 hover:text-primary transition-colors">
                Solutions
              </Link>
              <Link href="#resources" className="text-gray-700 hover:text-primary transition-colors">
                Resources
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-primary transition-colors">
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                >
                  Login
                </Button>
                <Button className="bg-primary text-white hover:bg-primary/90 w-full">Try Whitepace free</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
