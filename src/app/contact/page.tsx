'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will contact you soon!')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">Get in Touch with Vanita Math Classes</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="text-2xl mr-3">📍</span> Address
              </h3>
              <p className="text-gray-600 ml-11">
                Vanita Math Classes<br />
                Mathinda, Haryana<br />
                India
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="text-2xl mr-3">📞</span> Phone
              </h3>
              <p className="text-gray-600 ml-11">
                <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91 98765 43210</a><br />
                <a href="tel:+919876543211" className="text-blue-600 hover:underline">+91 98765 43211</a>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="text-2xl mr-3">📧</span> Email
              </h3>
              <p className="text-gray-600 ml-11">
                <a href="mailto:info@vanitamathclasses.com" className="text-blue-600 hover:underline">info@vanitamathclasses.com</a><br />
                <a href="mailto:support@vanitamathclasses.com" className="text-blue-600 hover:underline">support@vanitamathclasses.com</a>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="text-2xl mr-3">⏰</span> Hours
              </h3>
              <p className="text-gray-600 ml-11">
                Monday - Friday: 3:00 PM - 8:00 PM<br />
                Saturday: 10:00 AM - 7:00 PM<br />
                Sunday: Closed
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🔗</span> Follow Us
              </h3>
              <div className="flex gap-4 ml-11">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">f</a>
                <a href="#" className="text-blue-400 hover:text-blue-600 text-2xl">𝕏</a>
                <a href="#" className="text-pink-600 hover:text-pink-800 text-2xl">📷</a>
                <a href="#" className="text-red-600 hover:text-red-800 text-2xl">▶</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select Subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="course">Course Information</option>
                  <option value="fees">Fees & Scholarships</option>
                  <option value="doubt">Doubt Clearing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Visit Our Center</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500 text-center">Google Maps Integration Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  )
}
