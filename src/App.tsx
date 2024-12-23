import { Outlet, Route, Routes } from 'react-router-dom';

import { Footer, Header } from './components/layout';
import { Home, NotFound } from './pages';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <main className="pt-20 bg-dark-500">
              <Outlet />
            </main>
            <Footer />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
