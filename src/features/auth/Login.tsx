import { Link } from 'react-router';

import LoginForm from './components/LoginForm';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-blue-200" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link
              to="/"
              className="fixed left-8 top-6 flex items-center text-lg font-bold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
            >
              <img src="/src/assets/dirlogoC.svg" alt="Dir Logo" />
            </Link>
          </div>
          <div className="relative z-20 mt-auto"></div>
          <div className="absolute bottom-0 left-0 right-0 z-10 h-64 bg-gradient-to-t  to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 z-0 h-full">
            <img
              src="/src/assets/insiderImages/ResizedAboutUs.jpg"
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-orange-600">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">
                Sign in to your account to continue learning
              </p>
            </div>
            <LoginForm />
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg border border-orange-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center justify-center text-center">
                  <BookOpen className="h-8 w-8 text-orange-500" />
                  <p className="mt-2 text-xs font-medium">1000+ Courses</p>
                </div>
              </div>
              <div className="rounded-lg border border-orange-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center justify-center text-center">
                  <Users className="h-8 w-8 text-yellow-500" />
                  <p className="mt-2 text-xs font-medium">Community</p>
                </div>
              </div>
              <div className="rounded-lg border border-orange-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center justify-center text-center">
                  <GraduationCap className="h-8 w-8 text-orange-500" />
                  <p className="mt-2 text-xs font-medium">Certificates</p>
                </div>
              </div>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
