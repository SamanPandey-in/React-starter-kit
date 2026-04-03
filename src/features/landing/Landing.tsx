import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Brand</h1>
        <nav className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Sign up
          </Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-6xl">
            Build something amazing
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A modern React starter kit with authentication, routing, and dark mode support out of the box.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Get started
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Authentication', desc: 'Login and signup pages with protected routes' },
            { title: 'Dark Mode', desc: 'Full dark/light theme support with Tailwind CSS v4' },
            { title: 'TypeScript', desc: 'Type-safe code with React 19 and Vite' },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}