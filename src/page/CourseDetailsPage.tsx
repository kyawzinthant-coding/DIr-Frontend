'use client';

import { useState } from 'react';
import { Link, useParams } from 'react-router';
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Users,
  Award,
  ShoppingCart,
  Check,
  Star,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import { educationalProviders } from '@/assets/data/providerData';

export default function CourseDetailsPage() {
  const { providerId, seriesId, courseId } = useParams();

  const provider = educationalProviders.find(
    (p) => p.id === Number.parseInt(providerId || '0')
  );
  const series = provider?.series.find(
    (s) => s.id === Number.parseInt(seriesId || '0')
  );
  const course = series?.courses.find(
    (c) => c.id === Number.parseInt(courseId || '0')
  );

  const [isInCart, setIsInCart] = useState(false);

  if (!provider || !series || !course) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Course not found</h2>
        <Link to="/providers">
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 rounded-xl px-6 py-5 h-auto text-base font-medium">
            Return to Providers
          </Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsInCart(true);
    // toast({
    //   title: 'Added to cart',
    //   description: `${course.name} has been added to your cart.`,
    // });
  };

  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-16">
        <div className="container mx-auto px-6 py-12">
          <Link
            to={`/providers/${providerId}/series/${seriesId}`}
            className="inline-flex items-center text-white hover:text-blue-100 mb-6 text-lg font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to {series.name} Courses
          </Link>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-80 h-80 relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={
                  typeof course.coverImage === 'string'
                    ? course.coverImage
                    : 'https://via.placeholder.com/320x320'
                }
                alt={course.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <Badge className="bg-blue-700 hover:bg-blue-800 px-4 py-2 text-base rounded-full mb-4">
                {series.category}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight">
                {course.name}
              </h1>

              <div className="flex items-center mt-4 space-x-4">
                <div className="flex items-center">
                  <Star
                    className="w-5 h-5 text-yellow-400 mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400 mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400 mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400 mr-1"
                    fill="currentColor"
                  />
                  <Star
                    className="w-5 h-5 text-yellow-400/50 mr-1"
                    fill="currentColor"
                  />
                  <span className="ml-2 text-white font-medium">
                    4.8 (240 reviews)
                  </span>
                </div>

                <div className="flex items-center text-blue-100">
                  <Clock size={18} className="mr-2" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <p className="mt-6 text-blue-50 max-w-3xl text-lg">
                {course.description ||
                  `A comprehensive course designed to help you master ${series.category} skills with expert guidance and hands-on practice.`}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  size="lg"
                  className={`rounded-xl px-8 py-6 h-auto text-lg font-medium ${
                    isInCart
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-orange-500 hover:bg-orange-600'
                  }`}
                  onClick={handleAddToCart}
                  disabled={isInCart}
                >
                  {isInCart ? (
                    <>
                      <Check className="mr-2 h-6 w-6" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-6 w-6" />
                      Add to Cart - ${course.price || '49.99'}
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-xl px-8 py-6 h-auto text-lg font-medium"
                >
                  Preview Course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start mb-8 bg-gray-100 p-1 rounded-xl">
                <TabsTrigger
                  value="overview"
                  className="rounded-lg py-3 px-6 text-base"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="curriculum"
                  className="rounded-lg py-3 px-6 text-base"
                >
                  Curriculum
                </TabsTrigger>
                <TabsTrigger
                  value="instructor"
                  className="rounded-lg py-3 px-6 text-base"
                >
                  Instructor
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-lg py-3 px-6 text-base"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Course Description
                  </h2>
                  <div className="prose max-w-none text-gray-600 text-lg space-y-4">
                    <p>
                      {course.fullDescription ||
                        `Welcome to ${course.name}, a comprehensive course designed to help you master ${series.category} skills with expert guidance and hands-on practice.`}
                    </p>
                    <p>
                      This course is part of the {series.name} series by{' '}
                      {provider.name}, a leading provider of educational
                      content. Whether you're a beginner or looking to advance
                      your skills, this course offers structured learning that
                      will help you achieve your goals.
                    </p>
                    <p>
                      Throughout this {course.duration} course, you'll learn
                      through a combination of video lectures, interactive
                      exercises, quizzes, and real-world projects. By the end,
                      you'll have both theoretical knowledge and practical
                      experience that you can apply immediately.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    What You'll Learn
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* {(
                      course.learningPoints || [
                        'Comprehensive understanding of core concepts',
                        'Practical skills through hands-on exercises',
                        'Problem-solving techniques for real-world scenarios',
                        'Best practices and industry standards',
                        'Advanced techniques for experienced learners',
                        'Career guidance and professional development',
                      ]
                    ).map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-blue-50 p-4 rounded-xl"
                      >
                        <Check className="mr-3 h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{point}</span>
                      </div>
                    ))} */}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="curriculum">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Course Curriculum
                </h2>
                <div className="space-y-4">
                  {/* {(
                    course.modules || [
                      {
                        title: 'Introduction to the Course',
                        lessons: 3,
                        duration: '45 minutes',
                      },
                      {
                        title: 'Core Concepts and Fundamentals',
                        lessons: 5,
                        duration: '1.5 hours',
                      },
                      {
                        title: 'Practical Applications',
                        lessons: 4,
                        duration: '2 hours',
                      },
                      {
                        title: 'Advanced Techniques',
                        lessons: 6,
                        duration: '2.5 hours',
                      },
                      {
                        title: 'Real-world Projects',
                        lessons: 3,
                        duration: '3 hours',
                      },
                      {
                        title: 'Final Assessment and Next Steps',
                        lessons: 2,
                        duration: '1 hour',
                      },
                    ]
                  ).map((module, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-md rounded-xl overflow-hidden"
                    >
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              Module {index + 1}: {module.title}
                            </h3>
                            <div className="flex items-center mt-2 text-gray-600">
                              <BookOpen size={16} className="mr-2" />
                              <span className="font-medium">
                                {module.lessons} lessons
                              </span>
                              <Clock size={16} className="ml-6 mr-2" />
                              <span className="font-medium">
                                {module.duration}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-blue-600 mt-4 md:mt-0"
                          >
                            Preview
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))} */}
                </div>
              </TabsContent>

              <TabsContent value="instructor">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Your Instructor
                </h2>
                <Card className="border-0 shadow-md rounded-xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-blue-100 flex-shrink-0">
                        <img
                          src="https://via.placeholder.com/128x128"
                          alt="Instructor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Dr. Sarah Johnson
                        </h3>
                        <p className="text-blue-600 text-lg font-medium">
                          Senior Instructor at {provider.name}
                        </p>
                        <p className="mt-4 text-gray-600 text-lg">
                          Dr. Johnson has over 15 years of experience in
                          teaching and curriculum development. She specializes
                          in {series.category} education and has helped
                          thousands of students achieve their learning goals
                          through her engaging and practical teaching approach.
                        </p>
                        <div className="flex items-center mt-6 space-x-6">
                          <div className="flex items-center text-gray-700">
                            <Users size={20} className="mr-2 text-blue-600" />
                            <span className="font-medium">
                              10,000+ students
                            </span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Award size={20} className="mr-2 text-blue-600" />
                            <span className="font-medium">15+ courses</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Student Reviews
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      name: 'Michael P.',
                      rating: 5,
                      comment:
                        "This course exceeded my expectations. The content is well-structured and the instructor explains complex concepts in a way that's easy to understand.",
                    },
                    {
                      name: 'Jennifer L.',
                      rating: 4,
                      comment:
                        "Great course with practical examples. I've already started applying what I learned in my daily work.",
                    },
                    {
                      name: 'Robert K.',
                      rating: 5,
                      comment:
                        "One of the best courses I've taken. The instructor is knowledgeable and engaging, and the course materials are comprehensive.",
                    },
                  ].map((review, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-md rounded-xl overflow-hidden"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">
                              {review.name}
                            </div>
                            <div className="flex mt-1">
                              {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? 'text-yellow-400'
                                        : 'text-gray-300'
                                    }`}
                                    fill="currentColor"
                                  />
                                ))}
                            </div>
                          </div>
                          <div className="ml-auto text-gray-500 text-sm">
                            2 weeks ago
                          </div>
                        </div>
                        <p className="text-gray-600 text-lg">
                          {review.comment}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="sticky top-6 border-0 shadow-md rounded-xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Course Details
                </h3>

                <div className="space-y-5">
                  <div className="flex items-center text-gray-700">
                    <Clock className="mr-4 h-6 w-6 text-blue-600" />
                    <div>
                      <div className="font-medium text-lg">Duration</div>
                      <div className="text-gray-500">{course.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <BookOpen className="mr-4 h-6 w-6 text-blue-600" />
                    <div>
                      <div className="font-medium text-lg">Lessons</div>
                      <div className="text-gray-500">24 lessons</div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Users className="mr-4 h-6 w-6 text-blue-600" />
                    <div>
                      <div className="font-medium text-lg">Enrolled</div>
                      <div className="text-gray-500">1,240 students</div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Award className="mr-4 h-6 w-6 text-blue-600" />
                    <div>
                      <div className="font-medium text-lg">Certificate</div>
                      <div className="text-gray-500">Yes, upon completion</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600 text-lg">Price:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${course.price || '49.99'}
                    </span>
                  </div>

                  <Button
                    className={`w-full rounded-xl px-6 py-5 h-auto text-base font-medium ${
                      isInCart
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-orange-500 hover:bg-orange-600'
                    }`}
                    onClick={handleAddToCart}
                    disabled={isInCart}
                  >
                    {isInCart ? (
                      <>
                        <Check className="mr-2 h-5 w-5" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                      </>
                    )}
                  </Button>

                  <p className="text-center text-gray-500 mt-4">
                    30-Day Money-Back Guarantee
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
