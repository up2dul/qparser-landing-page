import type { ClassValue } from 'clsx';
import { Link as ReactRouterLink } from 'react-router-dom';

import { cn } from '~/lib/utils';

type LinkProps = {
  href: string;
  isNewTab?: boolean;
  className?: ClassValue;
  children: React.ReactNode;
};

export const Link = ({
  href,
  isNewTab = false,
  className,
  children,
}: LinkProps) => {
  const ariaLabel = `${children?.toString()} link`;
  const mergedClassName = cn(
    'font-medium text-center transition hover:opacity-80',
    className,
  );

  // for external links
  if (isNewTab)
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        target={isNewTab ? '_blank' : '_self'}
        rel="noreferrer"
        className={mergedClassName}
      >
        {children}
      </a>
    );

  // for hash links
  if (!isNewTab && href.startsWith('#'))
    return (
      <a href={href} aria-label={ariaLabel} className={mergedClassName}>
        {children}
      </a>
    );

  // for internal links
  return (
    <ReactRouterLink
      to={href}
      aria-label={ariaLabel}
      className={mergedClassName}
    >
      {children}
    </ReactRouterLink>
  );
};
