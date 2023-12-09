import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { StaticRoutes } from './routing/Routing';
import TopNavbar from './components/TopNavbar/TopNavbar';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <StaticRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;