import { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Provider, ProviderSeries } from '@/assets/data/providerData';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ProviderSeriesQuery } from '@/api/query';
import { Badge } from '@/components/ui/badge';

export default function ProviderSeriesPage() {
  const { providerId } = useLoaderData();
  const navigate = useNavigate();
  const { data: seriesList } = useSuspenseQuery(
    ProviderSeriesQuery(providerId)
  );

  const series: ProviderSeries[] = seriesList.series;
  const provider: Provider = seriesList.provider;
  const [searchQuery, setSearchQuery] = useState('');



  if (!series.length) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Provider not found</h2>
        <Link to="/providers">
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 rounded-xl px-6 py-4 text-base font-medium">
            Return to Providers
          </Button>
        </Link>
      </div>
    );
  }

  const filteredSeries = series.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
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
            <div className="w-full md:w-64 h-60 relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={`${provider.image.url}`}
                alt={provider.name}
                width={300}
                height={200}
                loading="lazy"
                className="w-full h-full object-fit"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                {provider.name}
              </h1>

              <div className="grid grid-cols-1  sm:grid-cols-3 gap-3 ">
                <div className="flex items-center justify-center border border-[#2563EB]/10 sm:justify-start gap-2 bg-[#2563EB]/10 rounded-lg p-2">
                  <BookOpen className="h-4 w-4 text-[#2563EB]" />
                  <span className="text-sm  text-[#153f9c] font-bold  ">
                    {series.length} Series available
                  </span>
                </div>
              </div>
              <p className="text-white max-w-2xl text-lg">
                {provider.description}
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
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="text"
              placeholder="Search series..."
              className="pl-10 py-4 text-base border-gray-200 rounded-xl shadow-sm"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSeries.map((series) => (
              <Card
                key={series.id}
                className="h-full overflow-hidden ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg border-0 shadow-md rounded-2xl"
              >
                <div className="w-full h-56 relative">
                  <img
                    src={series.image.url}
                    alt={series.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      {series.category.name}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {series.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-lg line-clamp-2">
                    {series.description ||
                      `A comprehensive series designed to help you master ${series.category.name} skills.`}
                  </p>
                  <div className="flex items-center mt-4">
                    {series._count.courses > 0 ? (
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 text-sm font-normal px-3 py-1 border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-400"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        {series._count.courses} Courses Available
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 text-sm font-normal px-3 py-1 border-emerald-200 text-emerald-700 dark:border-emerald-800 dark:text-emerald-400"
                      >
                        <Clock className="w-3.5 h-3.5" />
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="px-4 pt-0">
                  <Button
                    onClick={() => {
                      if (series._count.courses > 0) {
                        navigate(
                          `/providers/${providerId}/series/${series.id}`
                        );
                      }
                    }}
                    disabled={series._count.courses === 0}
                    className={`w-full rounded-xl cursor-pointer py-6 text-base font-medium transition-all duration-300 ${
                      series._count.courses > 0
                        ? 'bg-orange-600 hover:bg-orange-700'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {series._count.courses > 0 ? 'View Courses' : 'Coming Soon'}
                    {series._count.courses > 0 && (
                      <ArrowRight className="w-4 h-4 ml-2 opacity-80 group-hover:translate-x-1 transition-transform duration-300" />
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
