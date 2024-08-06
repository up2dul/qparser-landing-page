import { cn } from '~/lib/utils';

export const NavLogo = ({ isResponsive }: { isResponsive?: boolean }) => {
  return (
    <div className="flex items-center gap-[18px]">
      <img
        src="/images/logo.webp"
        alt="QParser logo"
        className="w-10 h-10 border-dark-500 border rounded-full"
      />

      <h1 className={cn('font-bold text-6', isResponsive && 'hidden md:block')}>
        QParser
      </h1>
    </div>
  );
};
