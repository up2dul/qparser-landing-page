import { PricingCard } from '~/components/common';
import { pricings } from '~/lib/data';

export const Pricing = () => {
  return (
    <section className="bg-dark-500">
      <h1 className="font-bold text-grey text-[35px] md:text-[42px] xl:text-[52px]">
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
