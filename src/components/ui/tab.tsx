import { X } from 'lucide-react';

import { cn } from '~/lib/utils';

export const Tab = ({ children }: { children: React.ReactNode }) => {
  return (
    <article
      className={cn(
        'relative h-[78px] px-4 bg-dark-400',
        'flex items-center justify-center overflow-x-hidden',
        'font-medium text-left text-white',
      )}
    >
      <div>{children}</div>
      <div
        className={cn(
          'absolute inset-y-0 right-0 h-[78px] w-[78px]',
          'flex items-center justify-center',
          'bg-gradient-to-r from-dark-400/80 to-dark-400',
        )}
      >
        <X className="w-3" />
      </div>
    </article>
  );
};
