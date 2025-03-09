import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Look1 from '../assets/LookSeries/LookCV-Level1.jpg';
import Look2 from '../assets/LookSeries/LookCV-Level2.jpg';
import Look3 from '../assets/LookSeries/LookCV-Level3.jpg';

const product = {
  id: 'look-1',
  name: 'Look 1 - National Geographic Learning',
  description:
    'Look 1 is an interactive English learning course designed for young learners. With stunning National Geographic photography, real-world stories, and interactive exercises, it enhances language skills while fostering curiosity and critical thinking.',
  requirements:
    'Designed for young learners (ages 6+), beginner-level English students, and classrooms incorporating real-world visuals and storytelling.',
  images: [Look1, Look2, Look3],
  price: '$29.00',
  format: 'Paperback, 136 pages',
  edition: '1st Edition (©2020)',
  authors: 'Katherine Bilsborough & Steve Bilsborough',
  videoPreview: 'https://www.youtube.com/embed/TseCfw3mSs8',
  includes: [
    "✅ **Student's Book & Workbook** (Print + Digital)",
    '✅ **Teacher’s Guide** with structured lesson plans',
    '✅ **Audio & Video Resources** for interactive learning',
    '✅ **Assessment Tools** (Quizzes, Progress Tracking)',
    '✅ **Interactive Activities & Assignments**',
  ],
  keyFeatures: [
    '📚 Engaging real-world content with National Geographic Explorers',
    '🖥️ Interactive digital learning tools with AI-based feedback',
    '🎥 High-quality videos and real-life photography to boost engagement',
    '📖 Structured learning with activity-based lessons',
    '📝 Comprehensive assessments to track progress effectively',
  ],
  faq: [
    {
      question: 'Is this course suitable for beginners?',
      answer: 'Yes, Look 1 is designed for beginner-level students aged 6+.',
    },
    {
      question: 'How do I access digital materials?',
      answer:
        'You will receive a code for the NGL Spark Platform upon purchase.',
    },
    {
      question: 'Is there a teacher’s version?',
      answer: 'Yes, teachers get access to structured lesson plans and guides.',
    },
  ],
  relatedProducts: [
    {
      id: 'look-2',
      name: 'Look 2 - National Geographic Learning',
      image: Look2,
      price: '$35.00',
    },
    {
      id: 'close-up-a1',
      name: 'New Close-up A1',
      image: Look3,
      price: '$40.00',
    },
  ],
};

const Product: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mt-12 mx-auto p-6">
      <Card className="shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-[450px] h-auto max-w-full rounded-lg shadow-md transition-transform hover:scale-105"
            />
            <div className="flex mt-4 gap-3">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={`w-[110px] h-[90px] object-cover rounded-md cursor-pointer border-2 transition ${
                    selectedImage === image
                      ? 'border-blue-500'
                      : 'border-gray-300 hover:border-gray-500'
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Right Section - Product Info */}
          <div className="flex flex-col justify-between space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-700 mt-3">{product.description}</p>

            {/* Key Features */}
            <Card className="mt-6 bg-blue-50 p-5 border-l-4 border-blue-500">
              <h2 className="text-lg font-semibold">Key Features</h2>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                {product.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </Card>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-3 mt-4">
              <span className="text-lg font-semibold">Quantity:</span>
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
            </div>

            {/* Purchase Section */}
            <h2 className="text-3xl font-bold text-blue-700">
              {product.price}
            </h2>
            <Button className="mt-4 w-full md:w-auto bg-blue-700 hover:bg-blue-900 text-white py-3 rounded-md">
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>

      {/* Video Preview Section with Fallback */}
      <Card className="mt-12 p-6">
        <h2 className="text-3xl font-bold mb-5">Course Preview</h2>
        {product.videoPreview ? (
          <iframe
            width="100%"
            height="400"
            src={product.videoPreview}
            title="Course Preview"
            className="rounded-lg shadow-md"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-gray-500 text-center text-lg">
            🚫 No video available for this course.
          </p>
        )}
      </Card>

      <Card className="mt-6 bg-orange-100 p-5 border-l-4 border-orange-500">
        <h2 className="text-lg font-semibold">What’s Included?</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          {product.includes.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </Card>

      <Card className="mt-6 bg-orange-100 p-5 border-l-4 border-orange-500">
        <h2 className="text-lg font-semibold">Requirements</h2>
        <p className="text-gray-700">{product.requirements}</p>
      </Card>

      {/* FAQ Section */}
      <Card className="mt-12 p-6">
        <h2 className="text-3xl font-bold mb-5">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {product.faq.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold">{item.question}</p>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Product;
