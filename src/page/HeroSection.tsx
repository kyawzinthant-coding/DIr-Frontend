import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="w-full lg:px-32 py-12 md:py-24 lg:py-32 xl:py-21">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Learn Without Limits
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Start, switch, or advance your career with thousands of courses,
                Professional Certificates, and degrees from world-class
                universities and companies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/courses">
                <Button size="lg" className="gap-1">
                  Explore Courses
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline">
                  Join for Free
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="text-muted-foreground">
                Join over{' '}
                <span className="font-medium text-foreground">10,000+</span>{' '}
                learners
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
