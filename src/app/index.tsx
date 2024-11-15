import AppRouter from './providers/AppRouter';
import QueryProvider from './providers/QueryProvider';
import dayjs from 'dayjs';
import './styles/globals.css';
import './styles/main.css';

import 'dayjs/locale/ko';
dayjs.locale('ko');

function App() {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
}

export default App;
