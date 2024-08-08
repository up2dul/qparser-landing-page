import { Button } from '~/components/ui';

export const JoinUs = () => {
  return (
    <section id="join-us" className="bg-green text-dark-400">
      <h1 className="mb-10 font-bold text-3xl md:text-5xl xl:text-6xl">
        Join us for more information
      </h1>
      <Button href="/join">Join now</Button>
    </section>
  );
};
