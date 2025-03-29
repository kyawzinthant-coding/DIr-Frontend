import { Card, CardContent } from '@/components/ui/card';
import type { course } from '@/assets/data/providerData';
import { Button } from '@/components/ui/button';

const CourseCard = ({ course }: { course: course }) => {
  return (
    <Card
      className="h-full overflow-hidden ring-1
     ring-gray-200 transition-all duration-300
      hover:shadow-lg hover:-translate-y-1 border-0
       shadow-md rounded-2xl flex flex-col"
    >
      <div className="relative w-full h-32 sm:h-36 md:h-40">
        <img
          src={course.previewImage.url || '/placeholder.svg'}
          alt={course.name}
          loading="lazy"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      <CardContent className="py-3 px-4 sm:px-6 md:px-8 flex-grow flex flex-col">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 line-clamp-1">
          {course.name}
        </h3>

        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3">
          {course.description}
        </p>

        <div className="flex justify-between items-center mt-auto pt-4">
          <Button className="bg-orange-600 cursor-pointer hover:bg-orange-700 rounded-xl w-full sm:w-auto min-w-[120px] sm:min-w-[150px] h-8 sm:h-9 md:h-10 text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-1 sm:py-2">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
