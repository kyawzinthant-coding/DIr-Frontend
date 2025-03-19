import { Button } from '@/components/ui/button';
import hero from '../assets/insiderImages/hero.png';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

function HeroSection() {
  return (
    <section className="w-full bg-lines py-12 md:py-6 lg:py-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="inline-flex rounded-md text-md border-[#2563EB]/20 bg-[#2563EB]/10 text-[#2563EB]"
              >
                Interactive Learning Platform
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none w-[700px]">
                Inspire Young Minds with Engaging Learning!
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                Empower kids with interactive courses from Digital Kids &
                National Geographic Learning & More. Fun, engaging, and designed
                for young learners!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="gap-1.5 cursor-pointer bg-[#2563EB] "
              >
                Explore Courses <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Get Started for Free
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] w-[600px] overflow-hidden rounded-xl md:h-[450px] lg:h-[360px]">
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
