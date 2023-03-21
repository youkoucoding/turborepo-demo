import { useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@cloudscape-design/global-styles/index.css";
import { Button, Layout, Navigation } from "./components";

function App() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const appLayout = useRef();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Layout ref={appLayout}>
        <Button />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
