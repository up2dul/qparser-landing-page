import { Footer, Header } from './components/layout';
import { Detail, Hero, Install, JoinUs, Payments } from './components/section';

function App() {
  return (
    <>
      <Header />

      <main className="mt-20">
        <Hero />
        <Install />
        <Detail />
        <Payments />
        <JoinUs />
      </main>

      <Footer />
    </>
  );
}

export default App;
