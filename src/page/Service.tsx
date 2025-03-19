import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Clock, Award, ArrowRight, BookOpen } from 'lucide-react';

export default function OurServices() {
  const services = [
    {
      id: 1,
      icon: Clock,
      title: '24/7 Learning Access',
      description: 'Learn at your own pace, anytime and anywhere',
      content:
        'Access your courses anytime, anywhere. Learn at your own pace with unlimited availability to all course materials.',
      ariaLabel: 'Learn more about 24/7 Learning Access',
    },
    {
      id: 2,
      icon: Award,
      title: 'High-Quality Curriculum',
      description: 'Expert-crafted educational content',
      content:
        'Expert-crafted courses designed by industry professionals. Comprehensive content that ensures mastery of every subject.',
      ariaLabel: 'Learn more about High-Quality Curriculum',
    },
    {
      id: 3,
      icon: BookOpen,
      title: 'Interactive & Engaging',
      description: 'Content that makes learning fun',
      content:
        'Our courses include videos, quizzes, and interactive lessons to make learning fun and effective for young minds.',
      ariaLabel: 'Learn more about Interactive & Engaging Content',
    },
  ];

  return (
    <section
      className="w-full py-2 md:py-24 lg:py-28 "
      aria-labelledby="our-services-heading"
    >
      <div className="container px-4 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <span className="inline-block rounded-lg  px-3 py-1 bg-[#F2F5F9] text-md text-gray-800">
              Our Services
            </span>
            <h2
              id="our-services-heading"
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              Designed for Young Learners
            </h2>
            <p className="max-w-[900px] text-lg text-gray-600 md:text-xl/relaxed">
              We're committed to providing the best educational experience with
              features designed to help you succeed.
            </p>
          </div>
        </div>

        <div
          className="mx-auto grid max-w-8xl grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {services.map((service) => (
            <Card
              key={service.id}
              className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 rounded-lg"
              role="listitem"
              aria-labelledby={`service-${service.id}-title`}
            >
              <div
                className="absolute right-4 top-4 h-12 w-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center"
                aria-hidden="true"
              >
                <service.icon
                  className="h-6 w-6 text-[#2563EB]"
                  aria-hidden="true"
                />
              </div>
              <CardHeader>
                <CardTitle
                  id={`service-${service.id}-title`}
                  className="text-2xl font-semibold text-gray-900"
                >
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-700 leading-relaxed">
                  {service.content}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="gap-1 p-0 text-[#2563EB] hover:text-[#1D4ED8] cursor-pointer transition-all"
                  aria-label={service.ariaLabel}
                >
                  Learn more{' '}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
