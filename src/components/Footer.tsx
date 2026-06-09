import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Vanita Math Classes</h3>
            <p className="text-sm">Providing quality mathematics education for over 8 years. Committed to student excellence.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/courses" className="hover:text-white transition">Courses</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/courses" className="hover:text-white transition">Class 6-8</a></li>
              <li><a href="/courses" className="hover:text-white transition">Class 9-10</a></li>
              <li><a href="/courses" className="hover:text-white transition">Class 11-12</a></li>
              <li><a href="/courses" className="hover:text-white transition">JEE/NEET</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm mb-2">📞 +91 98765 43210</p>
            <p className="text-sm mb-2">📧 info@vanitamathclasses.com</p>
            <p className="text-sm">📍 Mathinda, Haryana</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex justify-between items-center text-sm">
            <p>&copy; {currentYear} Vanita Math Classes. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
