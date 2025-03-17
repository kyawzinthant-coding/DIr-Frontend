import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Provider } from '@/assets/data/providerData';

const ProviderCard = ({ provider }: { provider: Provider }) => {


 const imgURl = import.meta.env.VITE_IMG_URL;
  return (
    <Card className="h-full overflow-hidden  transition-all duration-300 hover:shadow-xl border-0 shadow-md rounded-2xl hover:scale-105">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50  p-8 flex items-center justify-center h-52">
        <div className="w-[600px] h-[210px] relative flex items-center justify-center rounded-lg overflow-hidden">
          <img
            src={`${imgURl}${provider.image}`}
            alt={provider.name}
            loading="lazy"
            decoding="async"
            className="object-contain w-full h-full transition-transform duration-300 rounded-2xl hover:scale-110"
          />
        </div>
      </div>
      <CardContent className="p-3">
        <h3 className="text-2xl font-bold text-gray-900 text-center my-4">
          {provider.name}
        </h3>
        <p className="text-blue-600  text-center font-semibold">
          {provider._count.series > 0
            ? `${provider._count.series} Series Available`
            : 'No Series Available'}
        </p>
        <div className="mt-6 text-center">
          <Button className="bg-orange-600 cursor-pointer hover:bg-orange-700 rounded-xl px-8 py-3 h-auto text-base font-medium transition-colors duration-300 transform hover:scale-105">
            View Series
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderCard;
