import type { ClassValue } from 'clsx';
import { HashLink } from 'react-router-hash-link';

import { cn } from '~/lib/utils';

type LinkProps = {
  href: string;
  className?: ClassValue;
  children: React.ReactNode;
};

export const Link = ({ href, className, children }: LinkProps) => {
  const ariaLabel = `${children?.toString()} link`;
  const mergedClassName = cn(
    'font-medium text-center transition hover:opacity-80',
    className,
  );
  const isExternal = href.startsWith('http');

  // for external links
  if (isExternal)
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        target={isExternal ? '_blank' : '_self'}
        rel="noreferrer"
        className={mergedClassName}
      >
        {children}
      </a>
    );

  // for internal links
  return (
    <HashLink to={href} aria-label={ariaLabel} className={mergedClassName}>
      {children}
    </HashLink>
  );
};
