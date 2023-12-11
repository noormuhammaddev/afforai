import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { StaticRoutes } from './routing/Routing';
import TopNavbar from './components/TopNavbar/TopNavbar';
import Footer from './components/Footer/Footer';

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
      <Footer />
    </div>
  );
}

export default App;