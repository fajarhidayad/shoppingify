import { Outlet, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/history')({
  component: HistoryPage,
});

function HistoryPage() {
  return <Outlet />;
}
