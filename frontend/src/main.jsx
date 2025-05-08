import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import './index.css';
import {Layout} from './ui/layout/layout.jsx';
import {Shop} from './pages/shop/shop.jsx';
import {TireDetails} from './pages/tire-details/tire-details.jsx';

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
    element: <Layout />,
    children: [
      {
        index: true,
        element: <h1>Home page</h1>,
      },
      {
        path: 'about-us',
        element: <h1>About us</h1>,
      },
      {
        path: 'services',
        element: <h1>Services</h1>,
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
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
