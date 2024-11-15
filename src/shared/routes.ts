const routes = {
  root: '/',
  auth: {
    root: '/auth',
    signin: {
      root: '/auth/signin',
    },
    signup: {
      root: '/auth/signup',
    },
  },
} as const;

export { routes };
