import { createLazyFileRoute } from '@tanstack/react-router';
import clsx from 'clsx';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const Route = createLazyFileRoute('/statistics')({
  component: StatisticsPage,
});

const data = [
  { name: 'January', items: 35, pv: 2400, amt: 2400 },
  { name: 'February', items: 120, pv: 2400, amt: 2400 },
  { name: 'March', items: 35, pv: 2400, amt: 2400 },
  { name: 'April', items: 10, pv: 2400, amt: 2400 },
  { name: 'May', items: 48, pv: 2400, amt: 2400 },
  { name: 'June', items: 15, pv: 2400, amt: 2400 },
  { name: 'July', items: 62, pv: 2400, amt: 2400 },
];

function StatisticsPage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 mb-16">
        <div>
          <h2 className="text-2xl mb-8">Top items</h2>
          <ItemPercentageRange name="Rice" percentage={27} bgColor="primary" />
          <ItemPercentageRange
            name="Banana"
            percentage={12}
            bgColor="primary"
          />
          <ItemPercentageRange
            name="Watermelon"
            percentage={8}
            bgColor="primary"
          />
        </div>
        <div>
          <h2 className="text-2xl mb-8">Top categories</h2>
          <ItemPercentageRange
            name="Fruit and vegetables"
            percentage={64}
            bgColor="secondary"
          />
          <ItemPercentageRange
            name="Meat and fish"
            percentage={22}
            bgColor="secondary"
          />
          <ItemPercentageRange
            name="Beverages"
            percentage={14}
            bgColor="secondary"
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl mb-10">Monthly Summary</h2>
        <ResponsiveContainer width={'100%'} height={300}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="items" stroke="#F9A20B" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

const ItemPercentageRange = (props: {
  name: string;
  percentage: number;
  bgColor: 'primary' | 'secondary';
}) => {
  return (
    <div className="mb-6">
      <p className="flex justify-between items-center mb-3">
        <span className="text-sm">{props.name}</span>
        <span className="text-lg">{props.percentage}%</span>
      </p>
      <div className="w-full h-1.5 rounded-full bg-gray-300">
        <div
          className={clsx({
            'h-full rounded-full': true,
            'bg-primary': props.bgColor === 'primary',
            'bg-secondary': props.bgColor === 'secondary',
          })}
          style={{ width: `${props.percentage}%` }}
        />
      </div>
    </div>
  );
};
