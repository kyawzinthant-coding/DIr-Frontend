import { providerQuery } from '@/api/query';
import { Provider } from '@/assets/data/providerData';
import ProviderCard from '@/components/ProviderCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';

const CollectionPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: providerData } = useSuspenseQuery(providerQuery('?limits=8'));

  const filteredProviders = providerData.providers.filter(
    (provider: Provider) =>
      provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen ">
      <header className="bg-gradient-to-r text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight">
            E-Learning Platform
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Educational Providers
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              Browse our collection of top educational providers
            </p>
          </div>

          <div className="bg-white relative w-full md:w-96">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="text"
              placeholder="Search providers..."
              className="pl-10 py-6 text-base  border-gray-200 rounded-xl shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredProviders.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-xl">
              No providers found matching your search.
            </p>
            <Button
              variant="link"
              className="text-blue-600 cursor-pointer mt-4 text-lg"
              onClick={() => setSearchQuery('')}
            >
              Clear search
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providerData &&
              filteredProviders.map((provider: Provider, index: number) => (
                <Link
                  to={`/providers/${provider.id}/series`}
                  key={provider.id}
                  className="block"
                >
                  <ProviderCard provider={provider} index={index} />
                </Link>
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CollectionPage;
