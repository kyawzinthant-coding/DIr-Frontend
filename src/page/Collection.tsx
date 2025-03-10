import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { educationalProviders } from '@/assets/data/providerData';

const Collection = () => {
  const [selectedBrand, setSelectedBrand] = useState<number | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleBrandClick = (brandId: number) => {
    console.log('Brand selected:', brandId);
    setSelectedBrand(brandId);
    setSelectedSeries(null);
    setSelectedCategory(null);
  };

  const handleSeriesClick = (seriesId: number) => {
    console.log('Series selected:', seriesId);
    setSelectedSeries(seriesId);
  };

  const handleGoBack = () => {
    if (selectedSeries) {
      setSelectedSeries(null);
    } else if (selectedBrand) {
      setSelectedBrand(null);
      setSelectedCategory(null);
    }
  };

  const handleResetSelection = () => {
    console.log('Resetting selection');
    setSelectedBrand(null);
    setSelectedSeries(null);
    setSelectedCategory(null);
  };

  const selectedBrandData = educationalProviders.find(
    (brand) => brand.id === selectedBrand
  );

  if (selectedBrand && !selectedBrandData) {
    console.error('Selected brand data not found');
    return <div>Selected brand not found.</div>;
  }

  const filteredSeries =
    selectedBrandData?.series.filter((s) =>
      selectedCategory ? s.category === selectedCategory : true
    ) || [];

  const selectedSeriesData = selectedBrandData?.series.find(
    (s) => s.id === selectedSeries
  );

  const categories = selectedBrandData
    ? Array.from(new Set(selectedBrandData.series.map((s) => s.category)))
    : [];

  const hoverClasses =
    'transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,165,0,0.8)]';

  return (
    <div className="min-h-screen mt-20 flex relative">
      {/* Sidebar / Filters */}
      <aside className="w-1/4 p-6 shadow-lg bg-blue-800">
        <h2 className="text-xl font-bold mb-4 text-white">Filters</h2>
        <Input
          placeholder="Search brands..."
          className="mb-4 bg-white text-black"
        />
        <h3 className="text-lg font-semibold mb-2 text-white">
          Select a Brand
        </h3>
        <ul className="mb-4 space-y-2">
          <li
            onClick={handleResetSelection}
            className={`cursor-pointer p-2 rounded-md transition-all ${
              selectedBrand === null
                ? 'bg-white text-black'
                : 'text-white hover:bg-gray-300 hover:text-black'
            }`}
          >
            All Brands
          </li>
          {educationalProviders.map((brand) => (
            <li
              key={brand.id}
              onClick={() => handleBrandClick(brand.id)}
              className={`cursor-pointer p-2 rounded-md transition-all ${
                selectedBrand === brand.id
                  ? 'bg-white text-black border-r-4 border-orange-500'
                  : 'text-white hover:bg-gray-300 hover:text-black'
              } ${hoverClasses}`}
            >
              {brand.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6 bg-gray-100">
        {!selectedBrand && (
          <>
            <h1 className="text-3xl font-bold mb-6">Educational Providers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationalProviders.map((brand) => (
                <Card
                  key={brand.id}
                  className={`shadow-lg rounded-lg cursor-pointer ${hoverClasses}`}
                  onClick={() => handleBrandClick(brand.id)}
                >
                  <img
                    src={
                      typeof brand.logo === 'string'
                        ? brand.logo
                        : brand.logo.src
                    }
                    alt={
                      typeof brand.logo === 'string'
                        ? brand.name
                        : brand.logo.alt
                    }
                    className="w-full h-32 object-contain p-4"
                  />
                  <CardContent className="p-4">
                    <h2 className="text-lg font-bold">{brand.name}</h2>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {selectedBrand && !selectedSeries && (
          <>
            <h1 className="text-3xl font-bold mb-6">
              {selectedBrandData?.name} - Series
            </h1>
            {categories.length > 0 && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Filter by Category
                </label>
                <select
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="w-full border border-orange-500 p-2 rounded"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSeries.map((series) => (
                <Card
                  key={series.id}
                  className={`shadow-lg rounded-lg cursor-pointer ${hoverClasses}`}
                  onClick={() => handleSeriesClick(series.id)}
                >
                  {series.coverImage && (
                    <img
                      src={series.coverImage}
                      alt={`${series.name} Cover`}
                      className="w-full h-32 object-cover"
                    />
                  )}
                  <CardContent className="p-4">
                    <h2 className="text-lg font-bold">{series.name}</h2>
                    <p className="text-sm text-gray-500">{series.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {selectedSeries && selectedSeriesData && (
          <>
            <h1 className="text-3xl font-bold mb-6">
              {selectedSeriesData.name} - Courses
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedSeriesData.courses.map((course) => (
                <Card
                  key={course.id}
                  className={`shadow-lg rounded-lg ${hoverClasses}`}
                >
                  {course.coverImage && (
                    <img
                      src={course.coverImage}
                      alt={`${course.name} Cover`}
                      className="w-full h-80 object-cover"
                    />
                  )}
                  <CardContent className="p-4">
                    <h2 className="text-lg font-bold">{course.name}</h2>
                    <p className="text-gray-600">Duration: {course.duration}</p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Floating "Go Back" Button */}
      {(selectedBrand || selectedSeries) && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={handleGoBack}
            className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg rounded-full px-4 py-2"
          >
            Go Back
          </Button>
        </div>
      )}
    </div>
  );
};

export default Collection;
