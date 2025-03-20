import { Button } from './ui/button';
import { Provider } from '@/assets/data/providerData';
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
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative w-[300px] h-[200px] mx-auto  overflow-hidden">
          <img
            src={provider.image.url}
            alt={`${provider.name} cover`}
            className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 flex flex-col">
          <div className="mb-4 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
              {provider.name}
            </h3>
            <p className="text-gray-600 mt-2 text-lg line-clamp-2">
              {provider.description ||
                `A comprehensive series designed to help you master ${provider.name} skills.`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="flex items-center justify-center border border-[#2563EB]/10 sm:justify-start gap-2 bg-[#2563EB]/10 rounded-lg p-2">
              <BookOpen className="h-4 w-4 text-[#2563EB]" />
              <span className="text-sm  text-[#2563EB] font-bold  ">
                {provider._count.series} Series
              </span>
            </div>
          </div>

          {/* Explore Button */}
          <Button className="h-[49px] w-full cursor-pointer bg-orange-600 hover:bg-orange-700 border-0 rounded-xl group-hover:shadow-md transition-all duration-300 flex justify-center">
            <span>Explore Series</span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProviderCard;
