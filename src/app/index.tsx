import { Toaster } from '@/shared';
import AppRouter from './routers/app-router';
import QueryProvider from './providers/query-provider';
import dayjs from 'dayjs';
import './styles/globals.css';
import './styles/main.css';

import 'dayjs/locale/ko';
import { AuthProvider } from './providers/auth-provider';
dayjs.locale('ko');

function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      <Toaster />
    </QueryProvider>
  );
}

export default App;
