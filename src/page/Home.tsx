import { Button } from '@/components/ui/button';
import AboutUs from './AboutUs';
import HeroSection from './HeroSection';
import Service from './Service';
import StartLearning from './StartLearning';
import { ChevronRight } from 'lucide-react';

function Home() {
  return (
    <main className="w-full p-6 lg:px-32 py-8 md:py-19 lg:py-24 xl:py-18 bg-lines antialiased  h-full  overflow-x-hidden">
      <HeroSection />
      <Service />
      <StartLearning />
      <AboutUs />
      <section className="w-full py-12 md:py-24 lg:py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Join Our Community
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Browsse Your Learning Journey Today
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us in shaping the future of digital education and unlocking
                limitless learning resources!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1.5">
                Get Started for Free <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Courses
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
