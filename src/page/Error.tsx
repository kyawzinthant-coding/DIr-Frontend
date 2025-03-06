import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import { Button } from '@/components/ui/button';
import { Bug, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className=" mt-24 flex flex-col">
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue-600 mb-4">
              Oops! Something Went Wrong
            </h1>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 text-left rounded-r">
              <p className="text-lg text-orange-800 mb-2">
                Our learning robots are having a little trouble.
              </p>
              <p className="text-gray-600">
                Don't worry! This happens sometimes. You can try again or go
                back to the homepage.
              </p>
            </div>

            <div className=" mb-8">
              <Button
                asChild
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 flex items-center justify-center gap-2"
              >
                <Link to="/">
                  <Home className="h-4 w-4" />
                  Go to Homepage
                </Link>
              </Button>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h2 className="font-medium text-blue-800 mb-2 flex items-center justify-center gap-2">
                <Bug className="h-5 w-5" />
                Found a Bug?
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                If this keeps happening, our team would love to know about it!
              </p>
              <Button
                asChild
                variant="ghost"
                className="text-orange-600 hover:text-orange-800 hover:bg-orange-50 text-sm"
              >
                <Link to="/contact">Report Problem</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
