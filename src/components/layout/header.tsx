import { Navbar } from '~/components/common';
import { Button, Link, NavLogo } from '~/components/ui';
import { cn } from '~/lib/utils';

export const Header = () => {
  return (
    <header
      className={cn(
        'py-5 px-[70px] bg-dark-500 text-white',
        'flex justify-between items-center',
        'fixed top-0 inset-x-0 z-10',
      )}
    >
      <NavLogo isResponsive />

      <Navbar />

      <div className="flex items-center gap-x-10">
        <Link href="#">Purchase</Link>
        <Button variant="light">Login</Button>
      </div>
    </header>
  );
};
