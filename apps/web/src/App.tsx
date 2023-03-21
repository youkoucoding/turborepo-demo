import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@cloudscape-design/global-styles/index.css";
import { Button } from "./components";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Button />
    </QueryClientProvider>
  );
}

export default App;
