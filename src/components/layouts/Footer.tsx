import { useMemo } from 'react';
import {
  BookOpen,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = useMemo(
    () => [
      {
        title: 'Company',
        items: ['About Us', 'Careers', 'Press', 'Blog', 'Partners'],
        paths: ['/about', '/careers', '/press', '/blog', '/partners'],
      },
      {
        title: 'Resources',
        items: [
          'Resource Center',
          'Testimonials',
          'Help Center',
          'Contact Us',
          'FAQ',
        ],
        paths: ['/resources', '/testimonials', '/help', '/contact', '/faq'],
      },
      {
        title: 'Legal',
        items: [
          'Terms of Service',
          'Privacy Policy',
          'Cookie Policy',
          'Accessibility',
        ],
        paths: ['/terms', '/privacy', '/cookie-policy', '/accessibility'],
      },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      { icon: Facebook, label: 'Facebook', link: '#' },
      { icon: Twitter, label: 'Twitter', link: '#' },
      { icon: Instagram, label: 'Instagram', link: '#' },
      { icon: Linkedin, label: 'LinkedIn', link: '#' },
      { icon: Github, label: 'GitHub', link: '#' },
    ],
    []
  );

  return (
    <footer className="w-full  py-12">
      <div className="container px-6 md:px-12 lg:px-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <BookOpen className="h-6 w-6" />
              <span>DIR</span>
            </Link>
            <p className="text-sm text-gray-400">
              Empowering learners worldwide with high-quality online education.
              Our mission is to provide accessible, affordable, and effective
              learning experiences for everyone.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map(({ icon: Icon, label, link }) => (
                <Button key={label} variant="ghost" size="icon" asChild>
                  <Link
                    to={link}
                    aria-label={label}
                    className="hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {links.map(({ title, items, paths }) => (
            <div key={title} className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li key={item}>
                    <Link
                      to={paths[idx]}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-6 border-gray-700" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {currentYear} DIR. All rights reserved.</p>
          <div className="flex gap-4 mt-3 sm:mt-0">
            {['Sitemap', 'Cookies', 'Preferences'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
