import { Header } from './components/layout';
import { Detail, Hero, Install, Payments } from './components/section';

function App() {
  return (
    <>
      <Header />

      <main className="mt-20">
        <Hero />
        <Install />
        <Detail />
        <Payments />
      </main>
    </>
  );
}

export default App;
