import { cn } from '~/lib/utils';

export const Detail = () => {
  return (
    <section
      id="detail"
      className={cn(
        'px-[30px] md:px-[42px] lg:px-[72px] xl:px-[140px]',
        'text-4xl md:text-5xl xl:text-[64px]',
        'bg-white font-medium text-left text-dark-300',
      )}
    >
      <p className="text-balance leading-tight">
        QParser offers an effortless and smooth way to scrape Google search
        results by keyword or dork.
      </p>
      <p className="opacity-40 leading-tight">
        It's easy to use, <br /> a great choice for any user, and the most
        affordable on the market.
      </p>
    </section>
  );
};
