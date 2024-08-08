import {
  Detail,
  Hero,
  Install,
  JoinUs,
  Payments,
  Pricing,
} from '~/components/section';

export const Home = () => {
  return (
    <>
      <Hero />
      <Install />
      <Detail />
      <Payments />
      <Pricing />
      <JoinUs />
    </>
  );
};
