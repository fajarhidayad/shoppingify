import BackButton from '@/components/BackButton';
import { createLazyFileRoute } from '@tanstack/react-router';
import { CalendarIcon } from 'lucide-react';
import { useRouter } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/history/$id')({
  component: HistoryDetails,
});

function HistoryDetails() {
  const router = useRouter();
  const onBack = () => router.history.back();

  const { id } = Route.useParams();

  return (
    <>
      <BackButton onClick={onBack} className="mb-8" />
      <h1 className="text-[26px] font-bold mb-5">{id}</h1>
      <div className="text-xs text-gray-400 flex items-center gap-x-2.5 mb-12">
        <CalendarIcon /> <span>Mon 24.8.2020</span>
      </div>

      <section>
        <div className="mb-16 last:mb-5">
          <h2 className="text-lg mb-[18px]">Cookies</h2>
          <ul className="grid grid-cols-4 gap-5">
            <li className="bg-white shadow rounded-xl px-4 py-3 flex justify-between items-center">
              <span>Cookies Chocolate</span>
              <span className="text-primary text-xs font-bold">3 pcs</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
