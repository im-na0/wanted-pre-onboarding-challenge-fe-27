import { SignInPage, SignUpPage, TodoPage } from '@/pages';
import { Layout, routes } from '@/shared';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: routes.root,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <TodoPage />,
      },
    ],
  },
  {
    path: routes.auth.root,
    children: [
      {
        path: routes.auth.signin.root,
        element: <SignInPage />,
      },
      {
        path: routes.auth.signup.root,
        element: <SignUpPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
