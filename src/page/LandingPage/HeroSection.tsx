import { Button } from '@/components/ui/button';
import hero from '../../assets/insiderImages/hero.png';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { useAuthDataStore } from '@/store/authData';

function HeroSection() {
  const { user } = useAuthDataStore();
  return (
    <section
      className="w-full py-6 md:py-8 lg:py-12 bg-gradient-to-b from-background to-muted/30"
      aria-labelledby="hero-heading"
    >
      <div className="px-2 md:px-4 lg:px-12">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 h-auto items-center">
          {/* Left Section */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="inline-flex rounded-md text-md border-[#2563EB]/20 bg-[#2563EB]/10 text-[#2563EB]"
                aria-hidden="true"
              >
                Interactive Learning Platform
              </Badge>

              <h1
                id="hero-heading"
                className="text-xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl max-w-[700px] mx-auto lg:mx-0"
              >
                Inspire Young Minds with Engaging Learning!
              </h1>

              <h2 className="sr-only">Interactive Courses for Kids</h2>

              <p className="max-w-[600px] text-muted-foreground md:text-sm lg:text-xl leading-relaxed mx-auto lg:mx-0">
                Empower kids with interactive courses from Digital Kids,
                National Geographic Learning & more. Fun, engaging, and designed
                for young learners!
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link to="/providers" aria-label="Explore available courses">
                <Button
                  size="lg"
                  className="gap-1.5 cursor-pointer bg-[#2563EB] hover:bg-[#1E4BBE] transition-colors"
                >
                  Explore Courses <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>

              {user === null && (
                <Link
                  to="/login"
                  aria-label="Sign up and start learning for free"
                >
                  <Button
                    size="lg"
                    className="cursor-pointer"
                    variant="outline"
                  >
                    Get Started for Free
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[300px] lg:h-[300px] w-full max-w-[600px] mx-auto lg:mx-0 overflow-hidden rounded-xl">
            <img
              src={hero}
              decoding="async"
              alt="Children engaging in interactive learning activities with digital tools"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
              fetchPriority="high"
              width={800}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
