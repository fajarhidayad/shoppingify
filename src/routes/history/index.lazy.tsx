import { Link, createLazyFileRoute } from '@tanstack/react-router';
import clsx from 'clsx';
import { CalendarIcon, ChevronRightIcon } from 'lucide-react';

export const Route = createLazyFileRoute('/history/')({
  component: HistoryIndexPage,
});

function HistoryIndexPage() {
  return (
    <>
      <h1 className="font-bold text-[26px] mb-10">Shopping history</h1>
      <section>
        <div className="mb-8 lg:mb-12">
          <h3 className="text-xs mb-4">December 2023</h3>
          <ul className="flex flex-col gap-y-3">
            <HistoryItem title="Grocery List" status />
            <HistoryItem title="Party" status={false} />
          </ul>
        </div>
      </section>
    </>
  );
}

const HistoryItem = (props: { title: string; status: boolean }) => {
  return (
    <li>
      <Link
        to="/history/$id"
        params={{ id: props.title }}
        className="bg-white rounded-xl py-5 px-3 lg:px-5 shadow flex items-center cursor-pointer"
      >
        <p>{props.title}</p>
        <div className="ml-auto flex items-center gap-x-2 lg:gap-x-5">
          <p className="hidden text-xs text-gray-400 lg:flex items-center gap-x-2.5">
            <CalendarIcon /> <span>Mon 24.12.2023</span>
          </p>
          <span
            className={clsx({
              'border rounded-lg px-2 py-1 text-xs': true,
              'border-secondary text-secondary': props.status,
              'border-red-500 text-red-500': !props.status,
            })}
          >
            {props.status ? 'completed' : 'cancelled'}
          </span>
          <span className="text-primary">
            <ChevronRightIcon />
          </span>
        </div>
      </Link>
    </li>
  );
};
