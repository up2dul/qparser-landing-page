import { Link, NavLogo } from '~/components/ui';
import { navs } from '~/lib/data';

export const Footer = () => {
  return (
    <footer className="py-14 lg:py-6 px-[80px] xl:px-[150px] flex flex-col justify-between items-center gap-16 lg:flex-row">
      <NavLogo />

      <ul className="flex flex-col justify-between items-center gap-[57px] lg:flex-row">
        {navs.map(nav => (
          <li key={nav.title}>
            <Link href={nav.href}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
