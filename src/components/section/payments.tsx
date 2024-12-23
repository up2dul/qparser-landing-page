import { payments } from '~/lib/data';

export const Payments = () => {
  return (
    <section id="payments" className="bg-white">
      <h1 className="font-bold text-dark-200 text-3xl md:text-5xl xl:text-7xl">
        All crypto and fiat payment accepted
      </h1>

      <ul className="mt-28 grid grid-cols-2 justify-stretch md:grid-cols-3 xl:grid-cols-6">
        {payments.map(payment => (
          <li
            key={payment.name}
            className="py-6 px-8 rounded-lg transition hover:bg-green"
          >
            <img
              src={payment.src}
              alt={payment.name}
              width={113}
              height={113}
              className="mx-auto"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
