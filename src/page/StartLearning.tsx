import { providerQuery } from '@/api/query';
import { Provider } from '@/assets/data/providerData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router';

const StartLearning = () => {
  const { data: providerData } = useSuspenseQuery(providerQuery('?limits=4'));
  return (
    <section className="w-full py-12 md:py-24 lg:py-12 ">
      <div className="container px-4 md:px-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Featured Providers
              </div>
              <h2 className="text-3xl md:w-[550px] font-bold tracking-tighter md:text-6xl/tight">
                Start browsing Today From Best Providers
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our most popular courses designed for young learners.
                Interactive, engaging, and fun!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/providers">
                <Button size="lg" className="gap-1.5 cursor-pointer">
                  View All Providers <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {providerData.providers.map((course: Provider) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="relative">
                  <div className="flex items-center justify-center py-4">
                    <img
                      src={course.image.url}
                      alt={course.name}
                      className="w-[200px] h-full  object-contain rounded-2xl"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute left-4 flex items-center gap-2">
                    <Badge className="bg-[#2563EB] rounded-lg">
                      {course._count.series} Series
                    </Badge>
                  </div>
                  <Link to={`/providers/${course.id}/series`}>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute right-4 cursor-pointer top-4 h-8 w-8 rounded-full"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1">{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartLearning;
