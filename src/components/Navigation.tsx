'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-blue-600">
          Vanita Math Classes
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/courses" className="hover:text-blue-600 transition">Courses</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 py-4 px-4 space-y-2">
          <Link href="/" className="block py-2 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-blue-600">
            About
          </Link>
          <Link href="/courses" className="block py-2 hover:text-blue-600">
            Courses
          </Link>
          <Link href="/contact" className="block py-2 hover:text-blue-600">
            Contact
          </Link>
          <Link href="/contact" className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center">
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  )
}
