import { twMerge } from 'tailwind-merge';

export default function BackButton(props: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={props.onClick}
      className={twMerge(
        'text-primary font-bold text-sm self-start',
        props.className
      )}
    >
      &larr; back
    </button>
  );
}
