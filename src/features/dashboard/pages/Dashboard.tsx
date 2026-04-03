import { useAuth } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome back!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            You have successfully authenticated and can access this protected page.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Total Users', value: '1,234' },
            { label: 'Revenue', value: '$12,345' },
            { label: 'Active Sessions', value: '567' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}