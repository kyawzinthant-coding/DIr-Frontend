import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero from '../assets/insiderImages/hero.png';

function HeroSection() {
  return (
    <section className="w-full lg:px-2 py-0 md:py-7 lg:py-4 xl:py-6">
      <div className="container px-0 md:px-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Inspire Young Minds with Engaging Learning!
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                Empower kids with interactive courses from Digital Kids &
                National Geographic Learning & More. Fun, engaging, and designed
                for young learners!
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link to="/courses">
                <Button size="lg" className="gap-1">
                  Explore Courses
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline">
                  Get Started for Free
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm mt-2">
              <div className="text-muted-foreground leading-relaxed">
                Trusted by parents and teachers worldwide. Find the perfect
                learning resources for your child!
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={hero}
              alt="Hero Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
