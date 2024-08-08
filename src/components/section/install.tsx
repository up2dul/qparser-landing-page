import { Mark, MarkArrow, Tab } from '~/components/ui';
import { cn } from '~/lib/utils';

export const Install = () => {
  return (
    <section id="install" className="relative bg-green text-dark-400">
      <h1 className="font-bold text-3xl md:text-5xl xl:text-7xl">
        Lazy to install on desktop
      </h1>

      <div
        className={cn(
          'p-[18px] md:py-10 xl:py-[55px] mx-auto my-20 bg-white',
          'w-full md:w-[65%] lg:w-[48%] xl:w-[40%]',
          'flex justify-center items-center rounded-2xl',
        )}
      >
        <Tab>
          <img
            src="/images/logo.webp"
            alt="QParser logo"
            className="w-10 inline mr-5"
          />
          QParser - Effortless
        </Tab>
      </div>

      <p className="mt-6 font-medium text-sm text-balance md:text-lg xl:text-xl">
        You can open QParser in many browsers such as Firefox, Brave, Chrome,
        etc.
      </p>

      <Mark
        text="Solution for discover a trend"
        className={cn(
          'absolute flex flex-col-reverse -rotate-45 lg:rotate-12',
          'left-[14vw] sm:left-[20] md:left-[24vw] lg:left-[22vw]',
          'bottom-20 md:bottom-32 lg:bottom-36 xl:bottom-72',
        )}
      >
        <MarkArrow variant="dark" className="rotate-[165deg]" />
      </Mark>
      <Mark
        text="You just need open tab now"
        className={cn(
          'absolute -rotate-12 md:rotate-12',
          'top-20 xs:top-16 md:top-44 lg:top-48 xl:top-56',
          'right-[2vw] lg:right-[8vw] xl:right-[24vw]',
        )}
      >
        <MarkArrow variant="dark" className="-rotate-12" />
      </Mark>
    </section>
  );
};
