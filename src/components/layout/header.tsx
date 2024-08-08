import { Navbar } from '~/components/common';
import { Button, Link, NavLogo } from '~/components/ui';
import { cn } from '~/lib/utils';

export const Header = () => {
  return (
    <header
      className={cn(
        'bg-dark-500/80 backdrop-blur-md text-white',
        'pt-5 pb-3 px-[18px] md:px-6 lg:px-8 xl:px-[70px]',
        'flex justify-between items-center',
        'fixed top-0 inset-x-0 z-10',
      )}
    >
      <Link href="/">
        <NavLogo isResponsive />
      </Link>

      <Navbar />

      <div className="items-center gap-4 xl:gap-10 hidden lg:flex">
        <Link href="/purchase">Purchase</Link>
        <Button href="/login" variant="light">
          Login
        </Button>
      </div>
    </header>
  );
};
