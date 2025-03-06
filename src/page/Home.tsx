import HeroSection from './HeroSection';
import Service from './Service';

function Home() {
  return (
    <main className="w-full mt-12 p-6 lg:px-32 py-8 md:py-19 lg:py-24 xl:py-18">
      <HeroSection />
      <Service />
    </main>
  );
}

export default Home;
