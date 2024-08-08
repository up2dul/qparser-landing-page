import type { ClassValue } from 'clsx';

import { cn } from '~/lib/utils';

type MarkProps = {
  text: string;
  className?: ClassValue;
  children?: React.ReactNode;
};

export const Mark = ({ text, className, children }: MarkProps) => {
  const mergedClassName = cn(
    'relative w-[118px] font-caveat font-bold text-balance leading-tight',
    className,
  );

  return (
    <div className={mergedClassName}>
      <p className="mb-2">{text}</p>
      {children}
    </div>
  );
};
