import { Link, NavLogo } from '~/components/ui';
import { navs } from '~/lib/data';

export const Footer = () => {
  return (
    <footer className="py-6 flex justify-between items-center">
      <NavLogo />

      <ul className="flex justify-between items-center gap-[57px]">
        {navs.map(nav => (
          <li key={nav.title}>
            <Link href={nav.href}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
