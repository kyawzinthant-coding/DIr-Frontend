import React from 'react';
import { Card, CardContent } from './ui/card';
import { course, series } from '@/assets/data/providerData';
import { Clock } from 'lucide-react';
import { Button } from './ui/button';

const CourseCard = ({ course, series }: { course: course; series: series }) => {
  const imgURl = import.meta.env.VITE_IMG_URL;
  return (
    <Card className="h-full overflow-hidden  transition-all duration-300 hover:shadow-lg border-0 shadow-md rounded-2xl">
      <div className="relative">
        <div className="w-full h-56 relative">
          <img
            src={`${imgURl}${course.previewImage}`}
            alt={course.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
          <span className="text-sm font-medium text-gray-800">4.8</span>
        </div> */}
      </div>
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-gray-900">{course.name}</h3>
        <div className="flex items-center mt-3 text-gray-600">
          <Clock size={18} className="mr-2" />
        </div>
        <p className="mt-4 text-gray-600 line-clamp-2">
          {course.description ||
            `A comprehensive course designed to help you master ${series.category.name} skills.`}
        </p>
        <div className="flex justify-between items-center mt-6">
          <span className="text-2xl font-bold text-orange-600">
            {course.price}
          </span>
          <Button className="bg-orange-600 cursor-pointer hover:bg-orange-700 rounded-xl px-6 py-2">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
