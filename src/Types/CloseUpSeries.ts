enum Level {
  A1Plus = 'A1+',
  A2 = 'A2',
  B1 = 'B1',
  B1Plus = 'B1+',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
}

interface CloseUpSeriesItem {
  title: string;
  edition: string;
  series: string;
  description: string;
  keyFeatures: string[];
  level: Level;
  author: string;
  media: {
    image?: string;
    video?: string;
  };
}

interface NewCloseUpSeries {
  mainTitle: string;
  overview: string;
  series: CloseUpSeriesItem[];
}

const newCloseUpData: NewCloseUpSeries = {
  mainTitle: 'New Close-up Series',
  overview:
    'The New Close-up series immerses learners in the world through dynamic photography, videos, and real-world stories from National Geographic...',
  series: [
    {
      title: 'New Close-up B1+ with the Spark platform',
      edition: '3rd Edition',
      series: 'New Close-up',
      description:
        'This level provides upper-intermediate learners with engaging content and comprehensive exam preparation materials.',
      keyFeatures: [
        'Engages students with real-world topics and visuals.',
        'Includes updated exam tasks aligning with the latest Cambridge English for Schools specifications.',
        'Focuses on grammar, vocabulary, reading, writing, listening, and speaking skills.',
        'Offers resources compatible with the Spark platform for an enhanced learning experience.',
      ],
      level: Level.B1Plus,
      author: 'Louisa Essenhigh',
      media: {
        image: 'https://example.com/sample-image.jpg',
        video: 'https://example.com/sample-video.mp4',
      },
    },
  ],
};
