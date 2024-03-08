import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
    mutations: {
      retry: 0,
    },
  },
});
export const getQueryClient = () => {
  return queryClient;
};



const queryClient1 = getQueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient1}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
)

////This need fixed maybe

