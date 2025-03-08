import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import dirLogo from '../assets/insiderImages/ResizedAboutUs.jpg';

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
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About Us
        </h2>
        <div className="w-20 h-1 bg-orange-500 mt-4 mb-6 rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Digital Information Resources (DIR)
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Digital Information Resources (DIR)</strong> is a leading
            provider of digital learning materials, including e-library
            resources, e-journals, and interactive e-learning courses. Our
            mission is to empower students, educators, and professionals by
            offering accessible and innovative educational content that enhances
            learning experiences.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At <strong>DIR</strong>, we collaborate with top educational
            publishers like <strong>National Geographic Learning</strong> and
            <strong> Digital Kids</strong> to provide engaging and
            curriculum-aligned learning resources. Our platform ensures a
            seamless and user-friendly experience, making education more
            accessible for learners of all ages.
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed font-semibold">
            Join us in shaping the future of digital education and unlocking
            limitless learning opportunities!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src={dirLogo}
            alt="DIR Logo"
            className="w-96 h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
