import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Error404 from './pages/Error404';
import Event from './pages/Event';
import Events from './pages/Events';
import Home from './pages/Home';
import Venue from './pages/Venue';
import Venues from './pages/Venues';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto sticky top-0 z-50 bg-white">
        <Header />
      </header>
      <main className="container mx-auto flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events/featured' element={<Events endpoint="featured" />} />
          <Route path='/events/today' element={<Events endpoint="today" />} />
          <Route path='/events/upcoming' element={<Events endpoint="upcoming" />} />
          <Route path='/venues/:venueSlug/events/:id' element={<Event />} />
          <Route path='/venues/breweries' element={<Venues endpoint="breweries" />} />
          <Route path='/venues/:venueSlug' element={<Venue />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </main>
      <footer className="mt-6">
        <Footer />
      </footer>
    </div>
  );
}
 