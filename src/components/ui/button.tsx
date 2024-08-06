import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '~/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    variant?: 'dark' | 'light' | 'green';
  }>;

export const Button = ({
  className,
  variant = 'dark',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      aria-label={`${children?.toString()} button`}
      className={cn(
        'rounded-full py-[14px] px-[38px] font-medium',
        variant === 'dark' && 'bg-dark-400 text-white',
        variant === 'light' && 'bg-white text-dark-400',
        variant === 'green' && 'bg-green text-dark-400',
        'transition hover:opacity-90',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
