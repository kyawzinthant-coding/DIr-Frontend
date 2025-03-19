import { Button } from '@/components/ui/button';
import hero from '../assets/insiderImages/hero.png';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

function HeroSection() {
  return (
    <section
      className="w-full bg-lines py-6 md:py-6 lg:py-6 bg-gradient-to-b from-background to-muted/30"
      aria-labelledby="hero-heading"
    >
      <div className="container px-4 md:px-18">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 h-[35vh] items-center xl:grid-cols-[1fr_550px]">
          {/* Left Section */}
          <div className="flex flex-col justify-center space-y-6">
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
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none max-w-[700px]"
              >
                Inspire Young Minds with Engaging Learning!
              </h1>

              <h2 className="sr-only">Interactive Courses for Kids</h2>

              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                Empower kids with interactive courses from Digital Kids,
                National Geographic Learning & more. Fun, engaging, and designed
                for young learners!
              </p>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/providers" aria-label="Explore available courses">
                <Button
                  size="lg"
                  className="gap-1.5 cursor-pointer bg-[#2563EB] hover:bg-[#1E4BBE] transition-colors"
                >
                  Explore Courses <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link to="/" aria-label="Sign up and start learning for free">
                <Button size="lg" variant="outline">
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[300px] w-[100%] max-w-[600px] overflow-hidden rounded-xl md:h-[450px] lg:h-[360px]">
            <img
              src={hero}
              decoding="async"
              alt="Children engaging in interactive learning activities with digital tools"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
              width={800}
              height={360}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
