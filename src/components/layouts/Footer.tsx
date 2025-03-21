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
import { Input } from '@/components/ui/input';
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
    <footer className="w-full  antialiased">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold">LearnHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering learners worldwide with high-quality online education.
              Our mission is to provide accessible, affordable, and effective
              learning experiences for everyone.
            </p>
            <div className="mt-4 flex gap-4">
              {socialLinks.map(({ icon: Icon, label, link }) => (
                <Button key={label} variant="ghost" size="icon" asChild>
                  <Link to={link} aria-label={label}>
                    <Icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {links.map(({ title, items, paths }) => (
            <div key={title} className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">{title}</h3>
              <ul className="flex flex-col gap-2">
                {items.map((item, idx) => (
                  <li key={item}>
                    <Link
                      to={paths[idx]}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium">Subscribe to our newsletter</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Get the latest news, updates and offers straight to your inbox.
          </p>
          <form className="mt-4 flex max-w-md flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} LearnHub. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['Sitemap', 'Cookies', 'Preferences'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-foreground"
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
