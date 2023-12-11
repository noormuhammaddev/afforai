import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Affiliate from '../pages/Affiliate';
import Pricing from '../pages/Pricing';
import Testimonials from '../pages/Testimonials';
import HelpCenter from '../pages/HelpCenter';

export function StaticRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/affiliate' element={<Affiliate />}></Route>
      <Route path='/pricing' element={<Pricing />}></Route>
      <Route path='/testimonials' element={<Testimonials />}></Route>
      <Route path='/help-center' element={<HelpCenter />}></Route>
    </Routes>
  );
}