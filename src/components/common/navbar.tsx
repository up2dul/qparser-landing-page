import { AlignJustify, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Button, Link } from '~/components/ui';
import { navs } from '~/lib/data';
import { cn } from '~/lib/utils';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav>
      <ul className="hidden lg:flex justify-between items-center gap-6 xl:gap-[57px]">
        {navs.map(nav => (
          <li key={nav.title}>
            <Link href={nav.href}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="Open menu button"
        className="block lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AlignJustify />
      </button>

      <aside
        className={cn(
          'flex lg:hidden flex-col items-center justify-center',
          'bg-dark-500 h-screen absolute inset-0 z-20',
          'transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <button
          type="button"
          aria-label="Close menu button"
          className="absolute top-8 right-6 z-10"
          onClick={() => setIsOpen(false)}
        >
          <X size={46} />
        </button>

        <ul className="w-[50%] md:w-[40%] flex flex-col justify-stretch items-center gap-4 text-2xl md:text-3xl">
          {navs.map(nav => (
            <li key={nav.title}>
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          ))}
          <li className="mt-2">
            <Link href="/purchase">Purchase</Link>
          </li>
          <li className="w-full">
            <Button href="/login" variant="light" className="w-full">
              Login
            </Button>
          </li>
        </ul>
      </aside>
    </nav>
  );
};
