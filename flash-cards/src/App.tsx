import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ZettelOverview from './pages/ZettelOverview';
import Zettel from './pages/Zettel';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/zettel" element={<ZettelOverview />} />
        <Route path="/zettel/:id"  element={<Zettel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export function WrappedApp() {
  return <App />;
}
