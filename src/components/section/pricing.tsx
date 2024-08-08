import * as Switch from '@radix-ui/react-switch';

import { PricingCard } from '~/components/common';
import { pricings } from '~/lib/data';

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-dark-500">
      <h1 className="font-bold text-grey text-3xl md:text-5xl xl:text-6xl">
        Get Your Best Deal
      </h1>

      <div className="mt-[43px] md:mt-[50px] flex justify-center items-center gap-8 text-white">
        <h2 className="font-medium">Monthly</h2>

        <Switch.Root aria-label="Pricing switch button" className="switch-root">
          <Switch.Thumb className="switch-thumb" />
        </Switch.Root>

        <h2>Yearly</h2>
      </div>

      <ul className="mt-12 flex flex-wrap justify-center items-center gap-10">
        {pricings.map(pricing => (
          <li key={pricing.title}>
            <PricingCard {...pricing} />
          </li>
        ))}
      </ul>
    </section>
  );
};
