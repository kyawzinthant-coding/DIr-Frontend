import { Button } from '@/components/ui/button';
import type { Provider } from '@/assets/data/providerData';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const ProviderCard = ({
  provider,
  index,
}: {
  provider: Provider;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative w-full"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg ring-1/2 ring-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
        {/* Image container - made responsive */}
        <div className="relative w-full pt-6 px-4 sm:px-6">
          <div className="relative w-full max-w-[180px] sm:max-w-[200px] h-[120px] sm:h-[150px] mx-auto overflow-hidden">
            <img
              src={provider.image.url || '/placeholder.svg'}
              alt={`${provider.name} cover`}
              width={300}
              height={200}
              loading="lazy"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content container */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <div className="mb-3 sm:mb-4 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
              {provider.name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base line-clamp-2 sm:line-clamp-3">
              {provider.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4 mt-auto">
            <div className="flex items-center justify-center sm:justify-start gap-2 bg-[#2563EB]/10 rounded-lg p-2">
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-[#2563EB]" />
              <span className="text-xs sm:text-sm text-[#2563EB] font-bold">
                {provider._count.series} Series
              </span>
            </div>
          </div>

          {/* Explore Button */}
          <Button className="h-9 sm:h-10 md:h-[45px] w-full cursor-pointer bg-orange-600 hover:bg-orange-700 border-0 rounded-xl group-hover:shadow-md transition-all duration-300 flex justify-center items-center mt-auto">
            <span className="text-sm sm:text-base">Explore Series</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProviderCard;
