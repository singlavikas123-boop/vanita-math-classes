export default function Courses() {
  const courses = [
    {
      id: 1,
      name: 'Class 6-8 (Fundamentals)',
      grade: 'Foundation Level',
      topics: ['Basic Arithmetic', 'Geometry Basics', 'Algebra Introduction', 'Number Systems'],
      duration: '12 months',
      schedule: 'Mon, Wed, Fri: 4-5 PM',
      price: '₹2,500/month',
      description: 'Build strong mathematical foundations with focus on conceptual clarity.'
    },
    {
      id: 2,
      name: 'Class 9-10 (CBSE/ICSE)',
      grade: 'Board Exam Level',
      topics: ['Algebra', 'Geometry', 'Trigonometry', 'Statistics', 'Coordinate Geometry'],
      duration: '12 months',
      schedule: 'Tue, Thu, Sat: 5-6:30 PM',
      price: '₹3,500/month',
      description: 'Comprehensive coverage of board exam syllabus with practice tests.'
    },
    {
      id: 3,
      name: 'Class 11-12 (Advanced)',
      grade: 'Advanced Level',
      topics: ['Calculus', 'Vectors', 'Complex Numbers', 'Matrices', 'Probability'],
      duration: '12 months',
      schedule: 'Mon, Wed, Sat: 6-7:30 PM',
      price: '₹4,500/month',
      description: 'Advanced mathematics for board exams and higher studies.'
    },
    {
      id: 4,
      name: 'JEE Mains & Advanced',
      grade: 'Competitive Exam',
      topics: ['Problem Solving', 'Advanced Calculus', 'Coordinate Geometry', 'Algebra Mastery'],
      duration: '18 months',
      schedule: 'Flexible (Daily sessions)',
      price: '₹6,000/month',
      description: 'Intensive coaching for JEE Mains and Advanced with expert guidance.'
    },
    {
      id: 5,
      name: 'NEET (Quantitative)',
      grade: 'Medical Entrance',
      topics: ['Applied Mathematics', 'Problem Solving', 'Quick Calculations'],
      duration: '12 months',
      schedule: 'Tue, Thu, Sun: 6-7 PM',
      price: '₹3,000/month',
      description: 'Mathematics for NEET exam with focus on quantitative aptitude.'
    },
    {
      id: 6,
      name: 'One-on-One Tutoring',
      grade: 'Personalized',
      topics: ['Any Topic', 'Customized', 'Flexible', 'Doubt Clearing'],
      duration: 'Flexible',
      schedule: 'As per student schedule',
      price: '₹500/hour',
      description: 'Personalized one-on-one sessions for targeted learning.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl opacity-90">Comprehensive Mathematics Programs for All Levels</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                <p className="text-blue-100">{course.grade}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Topics Covered:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4 space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Schedule:</span>
                    <span className="font-semibold">{course.schedule}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-900 font-bold">Price:</span>
                    <span className="text-blue-600 font-bold">{course.price}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Can't Find Your Course?</h2>
          <p className="text-xl mb-8 opacity-90">We offer customized programs for your specific needs</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Contact Us for Custom Course
          </button>
        </div>
      </section>
    </div>
  )
}
