import { Clock, Award, ShieldCheck } from 'lucide-react';

export default function OurServices() {
  const services = [
    {
      icon: Clock,
      title: '24/7 Learning Access',
      description:
        'Access your courses anytime, anywhere. Learn at your own pace with unlimited availability to all course materials.',
    },
    {
      icon: Award,
      title: 'High-Quality Curriculum',
      description:
        'Expert-crafted courses designed by industry professionals. Comprehensive content that ensures mastery of every subject.',
    },
    {
      icon: ShieldCheck,
      title: 'Interactive & Engaging Content',
      description:
        'Our courses include videos, quizzes, and interactive lessons to make learning fun and effective.',
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-orange-500 mt-4 mb-6 rounded-full"></div>
          <p className="max-w-2xl text-lg text-gray-600">
            We're committed to providing the best educational experience with
            features designed to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center bg-orange-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="p-3 mb-4 bg-orange-100 rounded-full">
                <service.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center p-1 px-2 bg-orange-100 rounded-full text-sm text-orange-700">
            <span className="px-2 py-1 bg-orange-500 text-white rounded-full mr-2">
              New
            </span>
            Now offering specialized certification programs for professionals
          </div>
        </div>
      </div>
    </section>
  );
}
