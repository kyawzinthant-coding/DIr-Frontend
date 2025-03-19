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
  return (
    <footer className="w-full flex flex-row justify-center  bg-lines antialiased  h-full ">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold"></span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering learners worldwide with high-quality online education.
              Our mission is to provide accessible, affordable, and effective
              learning experiences for everyone.
            </p>
            <div className="mt-4 flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="#" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/resources"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Resource Center
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
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
            © {new Date().getFullYear()} LearnHub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Sitemap
            </Link>
            <Link
              to="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Cookies
            </Link>
            <Link
              to="/preferences"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
