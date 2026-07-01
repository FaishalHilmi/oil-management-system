import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  action?: ReactNode;
};

export default function EmptyState({ title, description, action }: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-3xl">
        📦
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 max-w-sm text-sm text-slate-500">{description}</p>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
