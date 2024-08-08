import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '~/lib/utils';
import { Link } from './link';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    href?: string;
    variant?: 'dark' | 'light' | 'green';
  }>;

export const Button = ({
  href,
  className,
  variant = 'dark',
  children,
  ...rest
}: ButtonProps) => {
  const mergedClassName = cn(
    'rounded-full py-[14px] px-[38px] font-medium',
    href && 'inline-block',
    variant === 'dark' && 'bg-dark-400 text-white',
    variant === 'light' && 'bg-white text-dark-400',
    variant === 'green' && 'bg-green text-dark-400',
    'transition hover:opacity-90',
    className,
  );

  if (href)
    return (
      <Link href={href} className={mergedClassName}>
        {children}
      </Link>
    );

  return (
    <button
      type="button"
      aria-label={`${children?.toString()} button`}
      className={mergedClassName}
      {...rest}
    >
      {children}
    </button>
  );
};
