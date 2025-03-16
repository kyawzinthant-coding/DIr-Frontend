'use client';

import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeft, Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { educationalProviders, Series } from '@/assets/data/providerData';

export default function ProviderSeriesPage() {
  const { providerId } = useParams();
  const provider = educationalProviders.find(
    (p) => p.id === Number.parseInt(providerId || '0')
  );

  const [searchQuery, setSearchQuery] = useState('');

  if (!provider) {
    return (
      <div className="container mx-auto px-6 py-20 mt-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Provider not found</h2>
        <Link to="/providers">
          <Button className="mt-6 bg-blue-600 cursor-pointer hover:bg-blue-700 rounded-xl px-6 py-5 h-auto text-base font-medium">
            Return to Providers
          </Button>
        </Link>
      </div>
    );
  }

  const filteredSeries = provider.series.filter((series: Series) =>
    series.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen  mt-14">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6 py-12">
          <Link
            to="/providers"
            className="inline-flex items-center text-white hover:text-orange-100 mb-6 text-lg font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Providers
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-32 h-32 relative flex-shrink-0 bg-white rounded-2xl p-4 shadow-md">
              <img
                src={provider.logo.src}
                alt={provider.logo.alt}
                className="object-contain w-full h-full p-2"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                {provider.name}
              </h1>
              <p className="text-xl text-orange-100 mt-3">
                {provider.series.length} Series Available
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Available Series
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              Browse series from {provider.name}
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="text"
              placeholder="Search series..."
              className="pl-10 py-6 text-base border-gray-200 rounded-xl shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredSeries.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-xl">
              No series found matching your search.
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
            {filteredSeries.map((series) => (
              <Link
                to={`/providers/${provider.id}/series/${series.id}`}
                key={series.id}
                className="block"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-md rounded-2xl">
                  <div className="w-full h-56 relative">
                    <img
                      src={series.coverImage}
                      alt={series.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                        {series.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {series.name}
                    </h3>
                    <p className="text-orange-600 mt-3 font-medium">
                      {series.courses.length} Courses Available
                    </p>
                    <div className="mt-6">
                      <Button className="w-full bg-orange-600 cursor-pointer hover:bg-orange-700rounded-xl px-6 py-3 h-auto text-base font-medium">
                        View Courses
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
