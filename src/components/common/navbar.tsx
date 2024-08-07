import { AlignJustify } from 'lucide-react';

import { Link } from '~/components/ui';
import { navs } from '~/lib/data';

export const Navbar = () => {
  return (
    <nav>
      <ul className="hidden lg:flex justify-between items-center gap-6 xl:gap-[57px]">
        {navs.map(nav => (
          <li key={nav.title}>
            <Link href={nav.href}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <button type="button" className="block lg:hidden">
        <AlignJustify />
      </button>
    </nav>
  );
};
