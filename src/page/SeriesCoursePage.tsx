import { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { ArrowLeft, BookOpen, Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

import CourseCard from '@/components/CourseCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { SeriesCoursesQuery } from '@/api/query';
import { course, series } from '@/assets/data/providerData';

export default function SeriesCoursesPage() {
  const { seriesId, providerId } = useLoaderData();

  const { data: coursesData } = useSuspenseQuery(SeriesCoursesQuery(seriesId));

  const courses: course[] = coursesData.courses;
  const seriesData: series = coursesData.series;

  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 py-12">
          <Link
            to={`/providers/${providerId}/series`}
            className="inline-flex items-center text-white hover:text-blue-100 mb-6 text-lg font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to {seriesData.name} Series
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-64 h-60 relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={`${seriesData.image.url}`}
                alt={seriesData.name}
                className="w-full h-full object-fit"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                {seriesData.name}
              </h1>
              <div className="grid grid-cols-1  sm:grid-cols-3 gap-3 ">
                <div className="flex items-center justify-center  bg-orange-500/10 border-orange-500/10 sm:justify-start gap-2  rounded-lg p-2">
                  <BookOpen className="h-6 w-6 text-orange-500 " />
                  <span className="text-md  text-orange-500 font-bold  ">
                    {seriesData._count.courses} Courses available
                  </span>
                </div>
              </div>
              <p className="text-white mt-6 max-w-2xl text-lg">
                {seriesData.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Available Courses
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              Browse courses in the {seriesData.name} series
            </p>
          </div>

          <div className="relative bg-white w-full md:w-96">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="text"
              placeholder="Search courses..."
              className="pl-10 py-6 text-base border-gray-200 rounded-xl shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-xl">
              No courses found matching your search.
            </p>
            <Button
              variant="link"
              className="text-blue-600 mt-4 text-lg"
              onClick={() => setSearchQuery('')}
            >
              Clear search
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Link
                to={`/providers/${providerId}/series/${seriesId}/courses/${course.id}`}
                key={course.id}
                className="block"
              >
                <CourseCard
                  key={course.id}
                  course={course}
                  series={seriesData}
                />
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
