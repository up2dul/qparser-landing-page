import type { ClassValue } from 'clsx';

type MarkArrowProps = {
  variant?: 'light' | 'dark';
  className?: ClassValue;
};

export const MarkArrow = ({ variant = 'light', className }: MarkArrowProps) => {
  return (
    <svg
      aria-label="Mark arrow"
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="31"
      fill="none"
      viewBox="0 0 52 31"
      className={className as string}
    >
      <title>Mark arrow</title>
      <path
        fill={variant === 'light' ? '#E6E6E6' : '#181818'}
        d="M3.966 22.403l.41-.912-.41.912zm-3.32-2.269a1 1 0 00-.58 1.29l3.193 8.414a1 1 0 001.87-.71L2.29 21.65l7.48-2.839a1 1 0 00-.71-1.87L.645 20.134zm3.73 1.357L1.41 20.157l-.82 1.824 2.966 1.334.82-1.824zM49.646.96C43.814 20.036 22.57 29.672 4.375 21.49l-.82 1.824c19.292 8.675 41.82-1.542 48.002-21.772L49.645.96z"
      />
    </svg>
  );
};
