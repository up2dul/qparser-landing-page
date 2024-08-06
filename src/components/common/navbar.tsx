import { Link } from '~/components/ui';
import { navs } from '~/lib/data';

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center gap-[57px]">
        {navs.map(nav => (
          <li key={nav.title}>
            <Link href={nav.href}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
