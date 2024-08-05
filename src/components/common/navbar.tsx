import { Link } from '~/components/ui';
import { navs } from '~/lib/data';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-[57px]">
      {navs.map(nav => (
        <Link key={nav.title} href={nav.href}>
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};
