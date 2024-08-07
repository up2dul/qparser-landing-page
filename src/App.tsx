import { Footer, Header } from './components/layout';
import {
  Detail,
  Hero,
  Install,
  JoinUs,
  Payments,
  Pricing,
} from './components/section';

function App() {
  return (
    <>
      <Header />

      <main className="pt-20 bg-dark-500">
        <Hero />
        <Install />
        <Detail />
        <Payments />
        <Pricing />
        <JoinUs />
      </main>

      <Footer />
    </>
  );
}

export default App;
