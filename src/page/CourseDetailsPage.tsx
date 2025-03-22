'use client';

import { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  CircleCheck,
  ChevronDown,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CourseDetails } from '@/assets/data/providerData';
import { useSuspenseQuery } from '@tanstack/react-query';
import { CourseDetailsQuery } from '@/api/query';
import { AnimatePresence, motion } from 'framer-motion';
import useCartStore from '@/store/cartStore';

export default function CourseDetailsPage() {
  const { providerId, seriesId } = useParams();
  const { courseId } = useLoaderData();
  const { data } = useSuspenseQuery(CourseDetailsQuery(courseId));

  const course: CourseDetails = data.course;
  const [isInCart, setIsInCart] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAddToCart = () => {
    setIsInCart(true);
  };

  const { addItem } = useCartStore();
  const { items } = useCartStore.getState();

  const [previewOpen, setPreviewOpen] = useState(false);

  function getEmbedUrl(videoUrl: string): string {
    try {
      const url = new URL(videoUrl);

      if (url.hostname === 'youtu.be') {
        const videoId = url.pathname.slice(1);
        return `https://www.youtube.com/embed/${videoId}`;
      }

      if (url.hostname.includes('youtube.com')) {
        const videoId = url.searchParams.get('v');
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`;
        }
      }

      return videoUrl;
    } catch {
      return videoUrl;
    }
  }

  const faqData = [
    {
      question: 'What is the duration of the course?',
      answer:
        'The course is self-paced, so you can complete it at your own convenience. On average, students take around 4-6 weeks to complete all modules and assignments.',
    },
    {
      question: 'Do I get a certificate after completing the course?',
      answer:
        'Yes, you will receive a certificate upon successfully completing all modules and assessments. This certificate can be shared on your LinkedIn profile or included in your resume.',
    },
    {
      question: 'Can I access the course materials after completion?',
      answer:
        'You will have lifetime access to all course materials, including updates. We regularly refresh the content to ensure it remains current with industry standards.',
    },
    {
      question: 'Is there any support available if I get stuck?',
      answer:
        'Yes, we offer comprehensive support through our community forum where instructors and fellow students can help with your questions. For premium courses, you also get direct email support.',
    },
  ];

  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 py-12">
          <Link
            to={`/providers/${providerId}/series/${seriesId}`}
            className="inline-flex items-center text-white hover:text-blue-100 transition-colors duration-300 mb-6 text-lg font-medium"
            /* Added transition on hover for smoother color change */
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Courses
          </Link>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-80 h-60 relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={course.previewImage.url}
                alt={course.name}
                loading="lazy"
                width={300}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight">
                {course.name}
              </h1>
              <p className="mt-6 text-blue-50 max-w-3xl text-lg">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  onClick={() => addItem(course)}
                  size="lg"
                  className={`rounded-xl px-8 py-6 md:w-[200px] cursor-pointer h-auto text-lg font-medium transition-colors duration-300 ${
                    items.some((i) => i.id === course.id)
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-orange-500 hover:bg-orange-600'
                  }`}
                  disabled={items.some((i) => i.id === course.id)}
                >
                  {items.some((i) => i.id === course.id) ? (
                    <>
                      <Check className="mr-2 h-6 w-6" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-6 w-6" />
                      Add to Cart
                    </>
                  )}
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-xl px-8 py-6 h-auto text-lg font-medium transition-colors duration-300"
                    >
                      Preview Course
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>Course Preview</DialogTitle>
                    </DialogHeader>
                    {course.video_preview ||
                    (course.CourseImages && course.CourseImages.length > 0) ? (
                      <Tabs
                        defaultValue={course.video_preview ? 'video' : 'images'}
                        className="mt-4"
                      >
                        <TabsList>
                          {course.video_preview && (
                            <TabsTrigger value="video">Video</TabsTrigger>
                          )}
                          {course.CourseImages?.length > 0 && (
                            <TabsTrigger value="images">Images</TabsTrigger>
                          )}
                        </TabsList>

                        {course.video_preview && (
                          <TabsContent value="video">
                            <div className="w-full aspect-video mt-4">
                              <iframe
                                src={getEmbedUrl(course.video_preview)}
                                className="w-full h-72 md:h-[400px] rounded-xl border"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </TabsContent>
                        )}

                        {course.CourseImages?.length > 0 && (
                          <TabsContent
                            value="images"
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                          >
                            {course.CourseImages.map((img, index) => (
                              <img
                                key={index}
                                src={img}
                                alt={`Preview ${index + 1}`}
                                className="rounded-lg border shadow"
                              />
                            ))}
                          </TabsContent>
                        )}
                      </Tabs>
                    ) : (
                      <div className="text-center text-gray-600 mt-4 text-sm">
                        No preview exists for this course.
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
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
                  className="rounded-lg py-3 px-6 text-base cursor-pointer"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="Requirements"
                  className="rounded-lg py-3 px-6 text-base cursor-pointer"
                >
                  Requirements
                </TabsTrigger>
                <TabsTrigger
                  value="FAQ"
                  className="rounded-lg py-3 px-6 text-base cursor-pointer"
                >
                  FAQ
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Course Description
                  </h2>
                  <div className="prose max-w-none text-gray-600 text-lg space-y-4">
                    <p>{course.description}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    What You'll Learn
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* [
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
                    )) */}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="Requirements">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Course Requirements
                </h2>
                <div className="space-y-2">
                  {course.requirements.map((item, index) => (
                    <Card
                      key={index}
                      className="border border-gray-200 p-4 rounded-2xl transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <CircleCheck className="text-green-500" size={20} />
                        <span className="text-gray-800 font-medium">
                          {item}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="FAQ">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <Card
                      key={index}
                      className={`bg-white overflow-hidden rounded-2xl transition-all duration-200 ${
                        openIndex === index
                          ? 'border-primary/20 shadow-md'
                          : 'border-gray-200 shadow-sm hover:border-primary/20 hover:shadow-md'
                      }`}
                    >
                      <CardContent className="p-0 bg-white">
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="flex justify-between items-center w-full px-4 text-left focus:outline-none focus:ring-primary/40"
                          aria-expanded={openIndex === index}
                          aria-controls={`faq-answer-${index}`}
                        >
                          <h3 className="text-lg font-medium text-gray-900">
                            {faq.question}
                          </h3>
                          <ChevronDown
                            className={`h-5 w-5 text-primary transition-transform duration-300 ${
                              openIndex === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {openIndex === index && (
                            <motion.div
                              id={`faq-answer-${index}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="bg-white px-5 mt-6 pb-5 pt-0">
                                <p className="text-gray-600 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="sticky top-6 border-0 shadow-md rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Course Details
                </h3>
                {/* ... (Course details content omitted for brevity) */}

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Button
                    className={`w-full rounded-xl cursor-pointer px-6 py-5 h-auto text-base font-medium transition-colors duration-300 ${
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
