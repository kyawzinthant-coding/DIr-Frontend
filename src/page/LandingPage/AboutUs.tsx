import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import dirLogo from '../../assets/insiderImages/ResizedAboutUs.jpg';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-16">
      <div className="container px-4 md:px-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl md:h-[420px] lg:h-[450px]">
              <img
                src={dirLogo}
                alt="About Digital Information Resources"
                className="w-full h-[600px] object-cover"
                decoding="async"
                loading="lazy"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                About Digital Information Resources (DIR)
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Digital Information Resources (DIR) is a leading provider of
                digital learning materials, including e-library resources,
                e-journals, and interactive e-learning courses.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our mission is to empower students, educators, and professionals
                by offering accessible and innovative educational content that
                enhances learning experiences.
              </p>
              <p>
                At DIR, we collaborate with top educational publishers like
                National Geographic Learning and Digital Kids to provide
                engaging and curriculum-aligned learning resources.
              </p>
              <p>
                Our platform ensures a seamless and user-friendly experience,
                making education more accessible for learners of all ages.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="gap-1.5 cursor-pointer"
              >
                Learn More About Us <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
