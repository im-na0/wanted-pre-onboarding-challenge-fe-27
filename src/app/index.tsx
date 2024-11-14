import AppRouter from "./providers/AppRouter";
import QueryProvider from "./providers/QueryProvider";
import "./styles/main.css";

function App() {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
}

export default App;
