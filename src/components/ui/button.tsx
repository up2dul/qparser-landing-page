import { cn } from '~/lib/utils';

type ButtonProps = {
  variant?: 'dark' | 'light' | 'green';
  children: React.ReactNode;
};

export const Button = ({ variant = 'dark', children }: ButtonProps) => {
  return (
    <button
      type="button"
      aria-label={`${children?.toString()} button`}
      className={cn(
        'rounded-full py-[14px] px-[38px] font-medium',
        variant === 'dark' && 'bg-dark-400 text-white',
        variant === 'light' && 'bg-white text-dark-400',
        variant === 'green' && 'bg-green-500 text-white',
        'transition hover:opacity-90',
      )}
    >
      {children}
    </button>
  );
};
