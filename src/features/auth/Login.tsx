import { Link } from 'react-router';

import LoginForm from './components/LoginForm';

function Login() {
  return (
    <div className="relative">
      <Link
        to="/"
        className="fixed left-8 top-6 flex items-center text-lg font-bold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
      >
        <img src="/src/assets/dirlogo.png" alt="Dir Logo" />
      </Link>
      <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex w-full place-items-center px-4">
          <LoginForm />
        </div>
        <div className="relative hidden lg:block bg-red-400">
          {/* <img
            src={Banner}
            alt="Furniture Shop"
            className="absolute inset-0 h-full w-full object-cover"
          /> */}
        </div>
      </main>
    </div>
  );
}

export default Login;
