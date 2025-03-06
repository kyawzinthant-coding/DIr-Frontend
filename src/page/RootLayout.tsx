import Navbar from '@/components/layouts/Navbar';
import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="">
      <Navbar />o
      <div className="mt-12">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1>Hello</h1>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>
      <main className="mt-16 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
