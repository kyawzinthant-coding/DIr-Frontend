import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import hero from '../assets/insiderImages/hero.png';

function HeroSection() {
  return (
    <section
      className="w-full lg:px-2 py-0 md:py-7 lg:py-4 xl:py-6"
      aria-labelledby="hero-heading"
    >
      <div className="container px-0 md:px-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1
                id="hero-heading"
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                Inspire Young Minds with Engaging Learning!
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                Empower kids with interactive courses from Digital Kids &
                National Geographic Learning & More. Fun, engaging, and designed
                for young learners!
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link to="/providers" aria-label="Explore Courses">
                {' '}
                <Button size="lg" className="gap-1 cursor-pointer">
                  Explore Courses
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />{' '}
                </Button>
              </Link>
              <Link to="/login" aria-label="Get Started for Free">
                <Button size="lg" variant="outline" className="cursor-pointer">
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={hero}
              decoding="async"
              alt="Children engaging in interactive learning activities"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
