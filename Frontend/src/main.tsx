import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { AppContextProvider } from "./Context/AppContext.tsx";
import { SearchContextProvide } from "./Context/SearchContext.tsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <SearchContextProvide>
          <App />
        </SearchContextProvide>
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
