import { Link } from 'react-router-dom';
import { useAuth } from '../../features/auth/AuthContext';
import ThemeToggle from '../../features/theme/ThemeToggle';

export default function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Brand
        </Link>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Sign up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}