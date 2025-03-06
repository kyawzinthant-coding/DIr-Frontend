import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';

function Register() {
  return (
    <div className="relative">
      <Link
        to="/"
        className="fixed left-8 top-6 flex items-center text-lg font-bold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
      >
        <img src="/src/assets/dirlogo.png" alt="Dir Logo" />
      </Link>
      <main className="grid min-h-screen grid-cols-1 ">
        <div className="flex w-full place-items-center px-4">
          <RegisterForm />
        </div>
      </main>
    </div>
  );
}

export default Register;
