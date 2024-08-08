import { BookmarkCheck } from 'lucide-react';

import { Button } from '~/components/ui';
import { cn } from '~/lib/utils';

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  isHighlighted?: boolean;
};

export const PricingCard = ({
  title,
  description,
  price,
  period,
  features,
  isHighlighted,
}: PricingCardProps) => {
  return (
    <article
      className={cn(
        'py-[30px] px-4 w-[340px] min-h-[535px] text-left rounded-[20px]',
        'flex flex-col items-stretch justify-between',
        isHighlighted ? 'bg-green' : 'bg-white',
      )}
    >
      <div className="flex flex-col items-stretch gap-4">
        <h1 className="-mb-2 font-bold text-[30px]">{title}</h1>

        <p className="font-medium text-dark-100">{description}</p>

        <hr className="border-dark-50" />

        <h2 className="font-medium text-[60px]">
          {price} <span className="text-sm">/{period}</span>
        </h2>

        <ul>
          {features.map(feature => (
            <li key={feature} className="mb-2 text-dark-400">
              <BookmarkCheck className="inline" /> {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button href="/register" variant={isHighlighted ? 'dark' : 'green'}>
        Register now
      </Button>
    </article>
  );
};
