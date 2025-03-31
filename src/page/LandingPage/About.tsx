// src/page/LandingPage/About.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Sparkles, Users, BookOpen, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function AboutPage() {
  return (
    <motion.div
      className="px-6 py-12 max-w-5xl mx-auto space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">About DIR</h1>
        <p className="text-gray-600 text-lg">
          Empowering learners through curated digital educational resources
          since 2018.
        </p>
      </motion.section>

      <Separator />

      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
      >
        {[
          {
            icon: <Calendar className="w-5 h-5" />,
            color: 'text-blue-600',
            title: 'Founded in 2018',
            desc: 'Digital Information Resources has been a trusted provider of top educational series like National Geographic Learning, Jolly, and Binary Logic, serving schools, educators, and students nationwide.',
          },
          {
            icon: <Users className="w-5 h-5" />,
            color: 'text-purple-600',
            title: 'Who We Serve',
            desc: 'We collaborate with schools, private educators, and institutions to bring premium educational content directly to learners across Myanmar.',
          },
          {
            icon: <BookOpen className="w-5 h-5" />,
            color: 'text-orange-600',
            title: 'Series & Courses',
            desc: "Our catalog features curated series such as 'Look', 'New Close Up' from National Geographic Learning, and more, each enriched with course previews including videos and imagery.",
          },
          {
            icon: <Sparkles className="w-5 h-5" />,
            color: 'text-green-600',
            title: 'Mission',
            desc: 'To make world-class educational resources accessible and user-friendly through technology and great partnerships.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            custom={i}
            initial="hidden"
            animate="visible"
          >
            <Card className="h-64 flex flex-col justify-between overflow-hidden">
              <CardContent className="p-6 space-y-2 flex-1">
                <div
                  className={`flex items-center gap-3 font-semibold text-lg ${item.color}`}
                >
                  {item.icon}
                  {item.title}
                </div>
                <p className="text-gray-700 line-clamp-5">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>
    </motion.div>
  );
}
