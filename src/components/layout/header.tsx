import { Navbar } from '~/components/common';
import { Button, Link, NavLogo } from '~/components/ui';

export const Header = () => {
  return (
    <header className="py-5 px-[70px] bg-dark-400 text-white flex justify-between items-center">
      <NavLogo isResponsive />

      <Navbar />

      <div className="flex items-center gap-x-10">
        <Link href="#">Purchase</Link>
        <Button variant="light">Login</Button>
      </div>
    </header>
  );
};
