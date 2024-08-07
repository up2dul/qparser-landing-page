import { PricingCard } from '~/components/common';
import { pricings } from '~/lib/data';

export const Pricing = () => {
  return (
    <section className="bg-dark-500">
      <h1 className="font-bold text-grey text-3xl md:text-5xl xl:text-6xl">
        Get Your Best Deal
      </h1>

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
