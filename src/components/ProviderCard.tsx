import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Provider } from '@/assets/data/providerData';

const ProviderCard = ({ provider }: { provider: Provider }) => {
  return (
    <Card className="h-full overflow-hidden  transition-all duration-300 hover:shadow-xl border-0 shadow-md rounded-2xl hover:scale-105">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50  p-8 flex items-center justify-center h-52">
        <div className="w-40  relative flex items-center justify-center rounded-lg overflow-hidden">
          <img
            src={provider.logo.src}
            alt={provider.logo.alt}
            className="object-contain max-w-full max-h-full transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      <CardContent className="p-3">
        <h3 className="text-2xl font-bold text-gray-900 text-center my-4">
          {provider.name}
        </h3>
        <p className="text-blue-600  text-center font-semibold">
          {provider.series.length} Series Available
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
