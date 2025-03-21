import React from 'react';
import { Card, CardContent } from './ui/card';
import { course, series } from '@/assets/data/providerData';

import { Button } from './ui/button';

const CourseCard = ({ course, series }: { course: course; series: series }) => {
  return (
    <Card className="h-full overflow-hidden ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg border-0 shadow-md rounded-2xl">
      <div className="relative">
        <div className=" mx-auto flex items-center justify-center w-full h-[200px] relative">
          <img
            src={`${course.previewImage.url}`}
            alt={course.name}
            width={200}
            height={200}
            loading="lazy"
            className="  h-full object-contain"
          />
        </div>
      </div>
      <CardContent className="py-1 px-8">
        <h3 className="text-2xl font-bold text-gray-900">{course.name}</h3>

        <p className="mt-4 text-gray-600 line-clamp-2">
          {course.description ||
            `A comprehensive course designed to help you master ${series.category.name} skills.`}
        </p>
        <div className="flex justify-between items-center mt-6">
          <Button className="bg-orange-600 cursor-pointer hover:bg-orange-700 rounded-xl w-[150px] h-[45px]  px-6 py-2">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
