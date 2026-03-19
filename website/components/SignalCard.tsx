interface SignalCardProps {
  number: string;
  name: string;
  description: string;
}

export default function SignalCard({ number, name, description }: SignalCardProps) {
  return (
    <div className="border border-[var(--border)] bg-white rounded-sm p-5">
      <div className="text-xs font-medium text-[var(--accent)] uppercase tracking-widest mb-1">
        {number}
      </div>
      <div className="font-semibold text-[var(--foreground)] mb-1">{name}</div>
      <div className="text-sm text-[var(--muted)] leading-relaxed">{description}</div>
    </div>
  );
}
