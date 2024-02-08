import BackButton from '@/components/BackButton';
import clsx from 'clsx';
import { CalendarIcon, ChevronRightIcon } from 'lucide-react';
import { useState } from 'react';

export default function HistoryTab() {
  const [detailMenu, setDetailMenu] = useState(false);

  if (detailMenu)
    return <HistoryDetailsMenu backFn={() => setDetailMenu(false)} />;

  return <HistoryMenu detailFn={() => setDetailMenu(true)} />;
}

const HistoryMenu = (props: { detailFn: () => void }) => {
  return (
    <>
      <h1 className="font-bold text-[26px] mb-10">Shopping history</h1>
      <div className="mb-8 lg:mb-12">
        <h3 className="text-xs mb-4">December 2023</h3>
        <ul className="flex flex-col gap-y-3">
          <HistoryItem onClick={props.detailFn} title="Grocery List" status />
          <HistoryItem onClick={props.detailFn} title="Party" status={false} />
        </ul>
      </div>
      <div className="mb-8 lg:mb-12">
        <h3 className="text-xs mb-4">January 2024</h3>
        <ul className="flex flex-col gap-y-3">
          <HistoryItem onClick={props.detailFn} title="Grocery List" status />
          <HistoryItem onClick={props.detailFn} title="Party" status={false} />
        </ul>
      </div>
    </>
  );
};

const HistoryDetailsMenu = (props: { backFn: () => void }) => {
  return (
    <>
      <BackButton onClick={props.backFn} className="mb-8" />
      <h1 className="text-[26px] font-bold mb-5">Eero's party</h1>
      <div className="text-xs text-gray-400 flex items-center gap-x-2.5 mb-12">
        <CalendarIcon /> <span>Mon 24.8.2020</span>
      </div>

      <div className="mb-16 last:mb-5">
        <h2 className="text-lg mb-[18px]">Cookies</h2>
        <ul className="grid grid-cols-4 gap-5">
          <li className="bg-white shadow rounded-xl px-4 py-3 flex justify-between items-center">
            <span>Cookies Chocolate</span>
            <span className="text-primary text-xs font-bold">3 pcs</span>
          </li>
        </ul>
      </div>
      <div className="mb-16 last:mb-5">
        <h2 className="text-lg mb-[18px]">Beverages</h2>
        <ul className="grid grid-cols-4 gap-5">
          <li className="bg-white shadow rounded-xl px-4 py-3 flex justify-between items-center">
            <span>Coffee</span>
            <span className="text-primary text-xs font-bold">3 pcs</span>
          </li>
        </ul>
      </div>
    </>
  );
};

const HistoryItem = (props: {
  title: string;
  status: boolean;
  onClick: () => void;
}) => {
  return (
    <li
      onClick={props.onClick}
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
    </li>
  );
};
