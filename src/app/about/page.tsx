export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Vanita Math Classes</h1>
          <p className="text-xl opacity-90">Excellence in Mathematics Education Since 2015</p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Vanita Math Classes was founded with a vision to provide exceptional mathematics education to students in Mathinda. With over 8 years of experience, we have successfully guided thousands of students to achieve their academic goals.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our team of dedicated educators believes in personalized learning approaches that cater to each student's unique needs and pace of learning.
            </p>
            <p className="text-lg text-gray-600">
              We combine traditional teaching methods with modern technology to create an engaging and effective learning environment.
            </p>
          </div>
          <div className="bg-blue-100 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500 text-center">Center Image/Photo</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Mission</h3>
              <p className="text-gray-700">
                To provide high-quality, accessible mathematics education that builds strong foundational concepts and encourages critical thinking in every student.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Vision</h3>
              <p className="text-gray-700">
                To be the leading mathematics coaching center recognized for producing confident, competent mathematicians prepared for success in higher education and competitive exams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'Highly qualified and experienced mathematics teachers' },
              { icon: '📚', title: 'Comprehensive Curriculum', desc: 'Aligned with CBSE, ICSE, and competitive exam standards' },
              { icon: '💻', title: 'Modern Learning Tools', desc: 'Technology-enabled classroom with interactive sessions' },
              { icon: '📊', title: 'Regular Assessment', desc: 'Continuous evaluation and progress tracking' },
              { icon: '🎯', title: 'Personalized Approach', desc: 'Individual attention and customized learning plans' },
              { icon: '🏆', title: 'Proven Success', desc: '90%+ students score above 90% in mathematics' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
