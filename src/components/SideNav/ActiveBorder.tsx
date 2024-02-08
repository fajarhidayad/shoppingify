import clsx from 'clsx';

export default function ActiveBorder(props: { active: boolean }) {
  return (
    <span
      className={clsx({
        'absolute left-0 top-auto bottom-auto h-11 w-[6px] rounded-r-full group-hover:bg-primary transition-all duration-150':
          true,
        'bg-transparent': !props.active,
        'bg-primary': props.active,
      })}
    ></span>
  );
}
