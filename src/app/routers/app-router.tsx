import { SignInPage, SignUpPage, TodoPage } from '@/pages';
import { Layout, routes } from '@/shared';
import { AuthenticatedRoute } from './authenticated-route';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: routes.root,
    element: (
      <Layout>
        <AuthenticatedRoute />
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
