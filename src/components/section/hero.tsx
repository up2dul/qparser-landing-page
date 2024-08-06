import { Button } from '~/components/ui';

export const Hero = () => {
  return (
    <section className="bg-dark-500">
      <h1 className="font-bold text-7xl text-white leading-tight">
        Effortless and <br /> Budget-Friendly <br /> Google Parsing
      </h1>

      <p className="mt-5 font-medium text-xl text-dark-50">
        Let’s make your dreams come true
      </p>

      <Button variant="green" className="mt-12">
        Get started
      </Button>
    </section>
  );
};
