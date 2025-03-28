import React from 'react';
import { Card, CardContent } from './ui/card';
import { course } from '@/assets/data/providerData';

import { Button } from './ui/button';

const CourseCard = ({ course }: { course: course }) => {
  return (
    <Card
      className="h-full overflow-hidden ring-1
     ring-gray-200 transition-all duration-300
      hover:shadow-lg hover:-translate-y-1 border-0
       shadow-md rounded-2xl"
    >
      <div className="relative w-full h-40">
        <img
          src={course.previewImage.url}
          alt={course.name}
          loading="lazy"
          className=" w-full h-full  object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      <CardContent className="py-1 px-8">
        <h3 className="lg:text-xl text-lg font-bold text-gray-900">
          {course.name}
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {course.description}
        </p>
        <div className="flex justify-between items-center mt-6">
          <Button className="bg-orange-600 cursor-pointer hover:bg-orange-700 rounded-xl w-[150px] h-[40px] text-sm  px-6 py-2">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
