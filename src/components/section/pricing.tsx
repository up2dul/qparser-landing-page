import * as Switch from '@radix-ui/react-switch';

import { PricingCard } from '~/components/common';
import { Mark, MarkArrow } from '~/components/ui';
import { pricings } from '~/lib/data';

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-dark-500 text-grey">
      <h1 className="font-bold text-3xl md:text-5xl xl:text-6xl">
        Get Your Best Deal
      </h1>

      <div className="mt-[43px] md:mt-[50px] flex justify-center items-center gap-8 text-white">
        <h2 className="font-medium">Monthly</h2>

        <Switch.Root aria-label="Pricing switch button" className="switch-root">
          <Switch.Thumb className="switch-thumb" />
        </Switch.Root>

        <h2>Yearly</h2>
      </div>

      <ul className="mt-32 flex flex-wrap justify-center items-center gap-10 lg:mt-36">
        {pricings.map(pricing => (
          <li key={pricing.title}>
            <PricingCard {...pricing} />
          </li>
        ))}
      </ul>

      <Mark
        text="Save 10% per month"
        className="absolute -rotate-[18deg] top-36 sm:top-44 md:top-56 xl:top-64 right-[20vw] sm:right-[32vw] xl:right-[38vw] flex flex-col-reverse gap-4"
      >
        <MarkArrow className="rotate-[55deg]" />
      </Mark>
    </section>
  );
};
