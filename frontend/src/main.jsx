import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import './index.css';
import {Layout} from './ui/layout/layout.jsx';
import {Shop} from './pages/shop/shop.jsx';
import {TireDetails} from './pages/tire-details/tire-details.jsx';
import {Home} from './pages/home/home.jsx';
import {Login} from './pages/login/login.jsx';
import {Provider} from 'react-redux';
import {store} from './state/store.js';
import {App} from './App.jsx';
import {ProtectedRoute} from './components/protected-route/protected-route.jsx';
import {Dashboard} from './pages/dashboard/dashboard.jsx';
import {PersistLogin} from './components/persist-login/persist-login.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, //5 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <PersistLogin />, // handles token refresh
    children: [
      {
        element: <Layout />, // provides nav/header etc.
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'about-us',
            element: <h1>About us</h1>,
          },
          {
            path: 'services',
            element: (
              <ProtectedRoute allowedRoles={['user', 'admin']}>
                <h1>Services</h1>
              </ProtectedRoute>
            ),
          },
          {
            path: 'shop',
            element: <Shop />,
          },
          {
            path: 'shop/tire/:id',
            element: <TireDetails />,
          },
          {
            path: 'contact-us',
            element: <h1>Contact Us</h1>,
          },
          {
            path: 'dashboard',
            element: (
              <ProtectedRoute allowedRoles={['admin']}>
                <Dashboard />
              </ProtectedRoute>
            ),
          },
          {
            path: 'login',
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App>
          <RouterProvider router={router} />
        </App>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
