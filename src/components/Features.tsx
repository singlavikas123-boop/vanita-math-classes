export default function Features() {
  const features = [
    {
      icon: '👨‍🏫',
      title: 'Expert Teachers',
      description: 'Experienced and qualified mathematics educators with proven track record'
    },
    {
      icon: '📱',
      title: 'Modern Learning',
      description: 'Interactive classes with latest teaching methodologies and technology'
    },
    {
      icon: '📈',
      title: 'Proven Results',
      description: '90%+ students score above 90% in mathematics exams'
    },
    {
      icon: '🎯',
      title: 'Personalized Path',
      description: 'Customized learning plans based on individual student needs'
    },
    {
      icon: '📚',
      title: 'Comprehensive Material',
      description: 'Detailed notes, practice problems, and mock tests provided'
    },
    {
      icon: '🏆',
      title: 'Success Stories',
      description: 'Students cleared JEE, NEET, and board exams with top scores'
    },
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
