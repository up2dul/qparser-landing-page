import { cn } from '~/lib/utils';

export const NavLogo = ({ isResponsive }: { isResponsive?: boolean }) => {
  return (
    <div className="flex items-center gap-[18px]">
      <img
        src="/images/logo.webp"
        alt="QParser logo"
        width={40}
        height={40}
        className="border-dark-500 border rounded-full"
      />

      <h1 className={cn('font-bold text-6', isResponsive && 'hidden lg:block')}>
        QParser
      </h1>
    </div>
  );
};
