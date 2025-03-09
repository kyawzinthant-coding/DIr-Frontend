import ngllogo from '../insiderImages/ngllogo.png';
import dklogo from '../insiderImages/dk_header_book.png';
import lookHeader from '../insiderImages/LookHeaderCover.jpeg';
import closeupHeader from '../insiderImages/NewCloseUpCover.jpeg';
import LookL1 from '../LookSeries/LookCV-Level1.jpg';
import LookL2 from '../LookSeries/LookCV-Level2.jpg';
import LookL3 from '../LookSeries/LookCV-Level3.jpg';
import DKStarter from '../DK/Starter.jpg';
import DKRacer from '../DK/Racer.jpg';

export type Course = {
  id: number;
  name: string;
  duration: string;
  coverImage: string;
};

export type Series = {
  id: number;
  name: string;
  category: string;
  coverImage: string;
  courses: Course[];
};

export type Provider = {
  id: number;
  name: string;
  logo: { src: string; alt: string } | string;
  series: Series[];
};

export const educationalProviders: Provider[] = [
  {
    id: 1,
    name: 'National Geographic Learning',
    logo: { src: ngllogo, alt: 'National Geographic Learning Logo' },
    series: [
      {
        id: 101,
        name: 'Look',
        category: 'English',
        coverImage: lookHeader,
        courses: [
          {
            id: 1001,
            name: 'Look Series 1',
            duration: '12 Weeks',
            coverImage: LookL1,
          },
          {
            id: 1002,
            name: 'Look Series 2',
            duration: '12 Weeks',
            coverImage: LookL2,
          },
          {
            id: 1003,
            name: 'Look Series 3',
            duration: '12 Weeks',
            coverImage: LookL3,
          },
          {
            id: 1004,
            name: 'Look Series 4',
            duration: '12 Weeks',
            coverImage: 'https://via.placeholder.com/400x200?text=Look+4',
          },
          {
            id: 1005,
            name: 'Look Series 5',
            duration: '12 Weeks',
            coverImage: 'https://via.placeholder.com/400x200?text=Look+5',
          },
          {
            id: 1006,
            name: 'Look Series 6',
            duration: '12 Weeks',
            coverImage: 'https://via.placeholder.com/400x200?text=Look+6',
          },
        ],
      },
      {
        id: 102,
        name: 'New Close-up',
        category: 'English',
        coverImage: closeupHeader,
        courses: [
          {
            id: 1010,
            name: 'Entrepreneurship Essentials',
            duration: '6 Weeks',
            coverImage:
              'https://via.placeholder.com/400x200?text=Close-up+Course',
          },
        ],
      },
      {
        id: 103,
        name: 'Mathematics Series',
        category: 'Math',
        coverImage:
          'https://via.placeholder.com/400x200?text=Mathematics+Series+Cover',
        courses: [
          {
            id: 1011,
            name: 'Mathematics Fundamentals',
            duration: '8 Weeks',
            coverImage:
              'https://via.placeholder.com/400x200?text=Math+Fundamentals',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Digital Kids',
    logo: { src: dklogo, alt: 'Digital Kids Logo' },
    series: [
      {
        id: 201,
        name: 'Digital Kids Series',
        category: 'ICT',
        coverImage: 'https://via.placeholder.com/400x200?text=AI+Series+Cover',
        courses: [
          {
            id: 2010,
            name: 'Digital Kids Series - Starter',
            duration: '4 Weeks',
            coverImage: DKStarter,
          },
          {
            id: 2011,
            name: 'Digital Kids Series - Racer',
            duration: '4 Weeks',
            coverImage: DKRacer,
          },
        ],
      },
    ],
  },
];
