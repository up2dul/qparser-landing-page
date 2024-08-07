import { Button } from '~/components/ui';

export const Hero = () => {
  return (
    <section className="bg-dark-500">
      <h1 className="font-bold text-white leading-tight text-4xl md:text-5xl xl:text-7xl">
        Effortless and <br /> Budget-Friendly <br /> Google Parsing
      </h1>

      <p className="mt-5 font-medium  text-dark-50 text-sm md:text-base xl:text-xl">
        Let’s make your dreams come true
      </p>

      <Button variant="green" className="mt-12">
        Get started
      </Button>
    </section>
  );
};
