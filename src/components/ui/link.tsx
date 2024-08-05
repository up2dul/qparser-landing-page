type LinkProps = {
  href: string;
  children: React.ReactNode;
  isNewTab?: boolean;
};

export const Link = ({ href, children, isNewTab = false }: LinkProps) => {
  return (
    <a
      href={href}
      aria-label={`${children?.toString()} link`}
      target={isNewTab ? '_blank' : '_self'}
      rel="noreferrer"
      className="font-medium transition hover:opacity-80"
    >
      {children}
    </a>
  );
};
