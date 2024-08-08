import { Button, Tab } from '~/components/ui';

export const Hero = () => {
  return (
    <section className="bg-dark-500">
      <h1 className="font-bold text-white leading-tight text-4xl md:text-5xl xl:text-7xl">
        Effortless and <br /> Budget-Friendly <br /> Google Parsing
      </h1>

      <p className="mt-5 font-medium  text-dark-50 text-sm md:text-base xl:text-xl">
        Let’s make your dreams come true
      </p>

      <Button href="#pricing" variant="green" className="mt-12">
        Get started
      </Button>

      <div className="mt-16 relative flex flex-col items-center lg:flex-row">
        <Tab className="-rotate-[4deg]">Fully proxyless google parsing</Tab>
        <Tab className="-rotate-[7deg]">Unlock unlimited search query</Tab>
        <Tab className="rotate-[4deg]">Fast and Efficient</Tab>
        <Tab className="-rotate-[7deg]">Access full costumers support</Tab>
      </div>
    </section>
  );
};
