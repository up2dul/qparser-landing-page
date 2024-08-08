import { useLocation } from 'react-router-dom';

export const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <section className="h-[80vh] text-white">
      <h1 className="mb-4 text-2xl">{pathname}</h1>
      <h2>404 - Page Not Found</h2>
    </section>
  );
};
